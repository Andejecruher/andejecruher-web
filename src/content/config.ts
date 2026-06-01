/**
 * Compatibility shim — Astro ≤4 expected the content collection config here.
 *
 * This project uses Astro 6 which requires the config at:
 *   src/content.config.ts  ← the authoritative runtime file
 *
 * This file exists only for IDE navigation and historical reference.
 * It re-exports everything from the real config so imports of this path
 * still resolve correctly in editors that index both locations.
 *
 * DO NOT move collection definitions here — Astro will NOT pick them up.
 */
export { collections } from '../content.config';
