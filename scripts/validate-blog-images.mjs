import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const contentDir = join(process.cwd(), 'src/content/blog');
const frontmatterValue = (source, key) => source.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+)["']?`, 'm'))?.[1]?.trim();
const errors = [];
for (const file of readdirSync(contentDir).filter((name) => ['.md', '.mdx'].includes(extname(name)))) {
  const source = readFileSync(join(contentDir, file), 'utf8');
  const image = frontmatterValue(source, 'image');
  const imageAlt = frontmatterValue(source, 'imageAlt');
  if (!image) errors.push(`${file}: falta image`);
  else if (!existsSync(join(process.cwd(), 'public', image.replace(/^\//, '')))) errors.push(`${file}: no existe public${image}`);
  if (!imageAlt || imageAlt.length < 20) errors.push(`${file}: imageAlt falta o es demasiado corto`);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Blog images and alt metadata are valid.');
