import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import { AppConfigService } from './AppConfig.service';
import { config } from './config';
import { EnvVarValidator } from './EnvVarValidator';

let validatedEnvVars: EnvVarValidator | undefined;

const validateEnvVars = (envVars: Record<string, unknown>) => {
  validatedEnvVars = plainToInstance(EnvVarValidator, envVars, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedEnvVars, {
    skipMissingProperties: false,
    whitelist: true,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedEnvVars;
};

const configuration = () => {
  if (typeof validatedEnvVars === 'undefined') {
    throw new Error();
  }

  return config(validatedEnvVars);
};

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnvVars,
      load: [configuration],
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
