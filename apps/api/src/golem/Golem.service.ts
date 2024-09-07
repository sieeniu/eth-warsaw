/* eslint-disable @typescript-eslint/no-magic-numbers */
import { GolemNetwork, MarketOrderSpec, Result } from '@golem-sdk/golem-js';
import { BadRequestException, Injectable } from '@nestjs/common';

import { AppConfigService } from '../config';

@Injectable()
export class GolemService {
  private golemNetworkProvider: GolemNetwork;

  public constructor(private readonly appConfig: AppConfigService) {
    this.golemNetworkProvider = new GolemNetwork();
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

      console.log('Starting work on Golem!');
      console.log('Computing 2+2 on a single rented machine');

      const singleRental = await this.golemNetworkProvider.oneOf({ order });

      const t = await singleRental.getExeUnit();
      const x = await t.run('echo $((2 + 2))');
      return x;
    } catch (err) {
      console.error('Something went wrong:', err);
      throw new BadRequestException(err);
    } finally {
      await this.golemNetworkProvider.disconnect();
    }
  }
}
