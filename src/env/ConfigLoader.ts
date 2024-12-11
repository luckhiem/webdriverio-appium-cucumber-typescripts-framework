import * as fs from 'fs';
import * as path from 'path';

type Config = { [key: string]: any };

class ConfigLoader {
  static loadConfig(): Config {
    const env = process.env.env || 'dev'; // Default to 'dev' if not set
    const configFileName = `${env}.json`;
    const configFilePath = path.resolve(__dirname, configFileName);

    try {
      if (!fs.existsSync(configFilePath)) {
        throw new Error(`Configuration file not found: ${configFilePath}`);
      }

      const configData = fs.readFileSync(configFilePath, 'utf-8');
      return JSON.parse(configData);
    } catch (error) {
      console.error(`Error loading config file: ${error}`);
      process.exit(1); // Exit with an error code
    }
  }
}

// Usage
const config = ConfigLoader.loadConfig();
console.log('Loaded configuration:', config);

export default ConfigLoader;