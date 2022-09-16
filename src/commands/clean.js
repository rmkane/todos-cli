import { existsSync, unlinkSync } from 'fs';
import { join } from 'path';
import envPaths from 'env-paths';
import { loadJSON } from '../utils/io.js';
import { log } from '../utils/logging.js';

const filename = 'config.json'; // Conf { configName, fileExtension } defaults

const clean = () => {
  try {
    const { projectName } = loadJSON('../../config/properties.json');
    const config = join(envPaths(projectName).config, filename);

    if (existsSync(config)) {
      unlinkSync(config);
      log(`Config successfully deleted`, ['green', 'bold']);
    } else {
      log(`Config does not exist`, ['yellow', 'bold']);
    }
  } catch (err) {
    log(`Config could not be deleted`, ['red', 'bold']);
  }
};

export default clean;
