export interface TypewriterOptions {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  onUpdate?: (text: string) => void;
}

export interface TypewriterInstance {
  destroy: () => void;
}

type Phase = 'typing' | 'pausing' | 'deleting';

const DEFAULT_TYPE_SPEED = 70;
const DEFAULT_DELETE_SPEED = 40;
const DEFAULT_PAUSE_AFTER_TYPE = 2200;
const DEFAULT_PAUSE_AFTER_DELETE = 500;

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function createTypewriter(
  element: HTMLElement,
  options: TypewriterOptions,
): TypewriterInstance {
  const {
    phrases,
    typeSpeed = DEFAULT_TYPE_SPEED,
    deleteSpeed = DEFAULT_DELETE_SPEED,
    pauseAfterType = DEFAULT_PAUSE_AFTER_TYPE,
    pauseAfterDelete = DEFAULT_PAUSE_AFTER_DELETE,
    onUpdate,
  } = options;

  if (!phrases.length) {
    return { destroy: () => undefined };
  }

  let phraseIndex = 0;
  let charIndex = phrases[0]?.length ?? 0;
  let phase: Phase = 'pausing';
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let destroyed = false;

  const setText = (text: string) => {
    element.textContent = text;
    onUpdate?.(text);
  };

  const schedule = (delay: number, fn: () => void) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (!destroyed) fn();
    }, delay);
  };

  const tick = () => {
    const currentPhrase = phrases[phraseIndex] ?? '';

    if (phase === 'typing') {
      charIndex += 1;
      setText(currentPhrase.slice(0, charIndex));

      if (charIndex >= currentPhrase.length) {
        phase = 'pausing';
        schedule(pauseAfterType, tick);
        return;
      }

      schedule(typeSpeed, tick);
      return;
    }

    if (phase === 'pausing') {
      phase = 'deleting';
      schedule(deleteSpeed, tick);
      return;
    }

    charIndex -= 1;
    setText(currentPhrase.slice(0, charIndex));

    if (charIndex <= 0) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      phase = 'typing';
      schedule(pauseAfterDelete, tick);
      return;
    }

    schedule(deleteSpeed, tick);
  };

  if (prefersReducedMotion()) {
    setText(phrases[0] ?? '');
    return {
      destroy: () => {
        destroyed = true;
        clearTimeout(timeoutId);
      },
    };
  }

  setText(phrases[0] ?? '');
  charIndex = phrases[0]?.length ?? 0;
  phase = 'pausing';
  schedule(pauseAfterType, tick);

  return {
    destroy: () => {
      destroyed = true;
      clearTimeout(timeoutId);
    },
  };
}
