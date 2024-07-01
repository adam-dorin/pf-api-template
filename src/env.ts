import dotenv from 'dotenv';
import path from 'path';

export const env: Record<string,unknown> = {};
export function setupEnvVariables() {
  dotenv.config({ path: path.join(__dirname, '../.env') });
  for (const key in process.env) {
    env[key] = process.env[key];
  }
}