import dotenv from 'dotenv';

dotenv.config();

const envToString = (envVariable: string) => process.env[envVariable] ?? '';

export const Env = {
  MONGODB_URL: envToString('MONGODB_URL'),
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
};
