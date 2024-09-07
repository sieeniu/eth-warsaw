import { ConfigService, Path, PathValue } from '@nestjs/config';

import { config } from './config';

type ConfigType = ReturnType<typeof config>;
type WasValidated = true;

export class AppConfigService extends ConfigService<ConfigType, WasValidated> {
  getInferred<P extends Path<ConfigType>>(
    propertyPath: P,
  ): PathValue<ConfigType, P> {
    return this.get(propertyPath, { infer: true });
  }
}
