/* eslint-disable @typescript-eslint/no-magic-numbers */
import { GolemNetwork, MarketOrderSpec } from '@golem-sdk/golem-js';
import { Injectable } from '@nestjs/common';

import { AppConfigService } from '../config';

@Injectable()
export class GolemService {
  private golemNetworkProvider: GolemNetwork;

  public constructor(private readonly appConfig: AppConfigService) {
    this.golemNetworkProvider = new GolemNetwork();
  }

  public async executeTask() {
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

      await singleRental
        .getExeUnit()
        .then(exe => exe.run('echo $((2 + 2))'))
        .then(res => console.log('Result:', res.stdout))
        .catch(err => console.error('Something went wrong:', err));
    } catch (err) {
      console.error('Something went wrong:', err);
    } finally {
      await this.golemNetworkProvider.disconnect();
    }
  }
}
