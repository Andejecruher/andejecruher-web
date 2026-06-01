---
title: "Primeros pasos con agentes de IA: de la idea a la implementación"
description: "Una guía práctica para construir tu primer agente de IA funcional usando Python, LangChain y OpenAI. Desde los conceptos fundamentales hasta un agente que realmente hace cosas útiles."
pubDate: 2025-03-05
category: "AI Agents"
tags: ["python", "langchain", "openai", "ai-agents", "automation"]
image: "/blog/agentes-ia.jpg"
author: "Andejecruher"
draft: false
readingTime: 10
---

## ¿Qué es un agente de IA, exactamente?

Hay mucho hype alrededor de los "agentes" y no siempre queda claro qué los distingue de un simple chatbot o una llamada directa a un LLM.

La diferencia fundamental: **un agente puede tomar acciones**. No solo genera texto — puede ejecutar herramientas, buscar información, escribir código, llamar APIs externas, y tomar decisiones sobre qué paso ejecutar a continuación basándose en los resultados anteriores.

El loop básico de un agente:

```
[Input del usuario]
       ↓
[LLM analiza y decide qué herramienta usar]
       ↓
[Ejecuta herramienta]
       ↓
[Observa resultado]
       ↓
[¿Necesita más pasos? → vuelve al principio]
       ↓
[Genera respuesta final]
```

## Configuración del entorno

```bash
# Crear entorno virtual
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .venv\Scripts\activate   # Windows

# Instalar dependencias
pip install langchain langchain-openai python-dotenv
```

Variables de entorno en `.env`:

```bash
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
```

## Tu primer agente: el agente calculadora

Vamos a construir un agente que puede hacer operaciones matemáticas. Simple, pero ilustra perfectamente los conceptos.

```python
# agent.py
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain_core.prompts import ChatPromptTemplate
from langchain.tools import tool
import math

load_dotenv()

# Definir herramientas
@tool
def calculate(expression: str) -> str:
    """Evalúa una expresión matemática. Acepta operaciones básicas y funciones math."""
    try:
        # Solo permitimos operaciones seguras
        allowed_names = {k: v for k, v in math.__dict__.items() if not k.startswith('_')}
        result = eval(expression, {"__builtins__": {}}, allowed_names)
        return str(result)
    except Exception as e:
        return f"Error: {e}"

@tool
def unit_convert(value: float, from_unit: str, to_unit: str) -> str:
    """Convierte entre unidades. Soporta: km/mi, kg/lb, celsius/fahrenheit."""
    conversions = {
        ('km', 'mi'): lambda x: x * 0.621371,
        ('mi', 'km'): lambda x: x * 1.60934,
        ('kg', 'lb'): lambda x: x * 2.20462,
        ('lb', 'kg'): lambda x: x / 2.20462,
        ('celsius', 'fahrenheit'): lambda x: x * 9/5 + 32,
        ('fahrenheit', 'celsius'): lambda x: (x - 32) * 5/9,
    }

    key = (from_unit.lower(), to_unit.lower())
    if key not in conversions:
        return f"Conversión no soportada: {from_unit} → {to_unit}"

    result = conversions[key](value)
    return f"{value} {from_unit} = {result:.4f} {to_unit}"

# Crear el agente
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

tools = [calculate, unit_convert]

prompt = ChatPromptTemplate.from_messages([
    ("system", "Eres un asistente matemático preciso. Usa las herramientas disponibles para responder."),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

agent = create_tool_calling_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# Probar
if __name__ == "__main__":
    result = executor.invoke({"input": "¿Cuántas millas son 42.195 km?"})
    print(result["output"])
```

## Agentes con memoria

Un agente sin memoria trata cada conversación como nueva. Para conversaciones con contexto, necesitás persistir el historial:

```python
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_core.runnables.history import RunnableWithMessageHistory

# Store en memoria (en producción usá Redis o PostgreSQL)
store = {}

def get_session_history(session_id: str) -> ChatMessageHistory:
    if session_id not in store:
        store[session_id] = ChatMessageHistory()
    return store[session_id]

# Prompt con historial
prompt_with_history = ChatPromptTemplate.from_messages([
    ("system", "Eres un asistente matemático. Recuerdas el contexto de la conversación."),
    ("placeholder", "{chat_history}"),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

agent_with_history = create_tool_calling_agent(llm, tools, prompt_with_history)
executor_base = AgentExecutor(agent=agent_with_history, tools=tools)

# Envolver con gestión de historial
agent_with_memory = RunnableWithMessageHistory(
    executor_base,
    get_session_history,
    input_messages_key="input",
    history_messages_key="chat_history",
)

# Uso con session_id
config = {"configurable": {"session_id": "user_123"}}
agent_with_memory.invoke({"input": "Calcula 15 * 23"}, config=config)
agent_with_memory.invoke({"input": "¿Y si le sumo 100?"}, config=config)  # Recuerda el resultado anterior
```

## Agentes con herramientas externas: búsqueda web

El siguiente nivel: agentes que pueden buscar información en tiempo real.

```python
from langchain_community.tools import DuckDuckGoSearchRun

search = DuckDuckGoSearchRun()

@tool
def web_search(query: str) -> str:
    """Busca información actualizada en la web."""
    return search.run(query)

# Combinar con herramientas anteriores
all_tools = [calculate, unit_convert, web_search]
```

## Consideraciones para producción

Después de varios agentes en producción, aprendí estas lecciones:

### 1. Limitar el número de iteraciones

```python
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    max_iterations=10,  # Evitar loops infinitos
    handle_parsing_errors=True,
)
```

### 2. Manejo de errores

Los agentes fallán. El LLM puede generar JSON malformado, las herramientas pueden lanzar excepciones. Siempre tenés que manejar estos casos:

```python
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    handle_parsing_errors="Hubo un error al procesar. Intenta de nuevo.",
)
```

### 3. Observabilidad

En producción, necesitás saber qué está haciendo tu agente:

```python
from langchain.callbacks import get_openai_callback

with get_openai_callback() as cb:
    result = executor.invoke({"input": "¿Cuánto es 100km en millas?"})
    print(f"Tokens usados: {cb.total_tokens}")
    print(f"Costo: ${cb.total_cost:.4f}")
```

## Próximos pasos

Con estos fundamentos podés construir agentes que:

- **Interactúen con bases de datos** — consultan y modifican datos en respuesta al lenguaje natural
- **Gestionen archivos** — leen, escriben, organizan documentos
- **Integren con APIs externas** — Slack, GitHub, Google Calendar, etc.
- **Ejecuten código** — Python sandboxed, análisis de datos en tiempo real

Los agentes de IA son una de las áreas que más rápido está evolucionando en software. Vale la pena invertir tiempo en entenderlos a fondo.
