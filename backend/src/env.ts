import dotenv from 'dotenv';

dotenv.config();

const envToString = (envVariable: string) => process.env[envVariable] ?? '';

export const Env = {
  MONGODB_URL: envToString('MONGODB_URL'),
};
