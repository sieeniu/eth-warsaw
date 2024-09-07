import { EnvVarValidator } from './EnvVarValidator';

export const config = (envVars: EnvVarValidator) => ({
  yagnaAppKey: envVars.YAGNA_APPKEY,
  pricing: {
    maxStartPrice: envVars.PRICING_MAX_START_PRICE,
    maxCpuPerHourPrice: envVars.PRICING_MAX_CPU_PER_HOUR_PRICE,
    maxEnvPerHourPrice: envVars.PRICING_MAX_ENV_PER_HOUR_PRICE,
  },
  db: {
    host: envVars.DB_HOST,
    port: envVars.DB_PORT,
    user: envVars.DB_USER,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_NAME,
  },
});
