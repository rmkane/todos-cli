import { readFileSync } from 'fs';

const loadJSON = (path) =>
  JSON.parse(readFileSync(new URL(path, import.meta.url)));

// eslint-disable-next-line import/prefer-default-export
export { loadJSON };
