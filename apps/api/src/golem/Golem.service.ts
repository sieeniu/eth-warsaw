/* eslint-disable @typescript-eslint/no-magic-numbers */
import { GolemNetwork, MarketOrderSpec, Result } from '@golem-sdk/golem-js';
import { pinoPrettyLogger } from '@golem-sdk/pino-logger';
import { BadRequestException, Injectable } from '@nestjs/common';

import { AppConfigService } from '../config';

@Injectable()
export class GolemService {
  private golemNetworkProvider: GolemNetwork;

  public constructor(private readonly appConfig: AppConfigService) {
    const logger = pinoPrettyLogger({
      level: 'info',
    });
    this.golemNetworkProvider = new GolemNetwork({
      logger,
    });
  }

  public async executeTask(): Promise<Result<unknown>> {
    try {
      await this.golemNetworkProvider.connect();
      const order: MarketOrderSpec = {
        demand: {
          workload: { imageTag: 'golem/alpine:latest' },
          subnetTag: 'ethwarsawpriv1',
        },
        market: {
          rentHours: 15 / 60,
          pricing: {
            model: 'linear',
            maxStartPrice: this.appConfig.getInferred('pricing.maxStartPrice'),
            maxCpuPerHourPrice: this.appConfig.getInferred(
              'pricing.maxCpuPerHourPrice',
            ),
            maxEnvPerHourPrice: this.appConfig.getInferred(
              'pricing.maxEnvPerHourPrice',
            ),
          },
        },
      };
      const singleRental = await this.golemNetworkProvider.oneOf({ order });
      const exeUnit = await singleRental.getExeUnit();

      const response = await exeUnit.run('echo $((2 + 2))');

      await singleRental.stopAndFinalize();
      return response;
    } catch (err) {
      throw new BadRequestException(err);
    } finally {
      await this.golemNetworkProvider.disconnect();
    }
  }
}
