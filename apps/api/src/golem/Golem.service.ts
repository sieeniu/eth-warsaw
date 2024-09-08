/* eslint-disable @typescript-eslint/no-magic-numbers */
import { GolemNetwork, MarketOrderSpec, Result } from '@golem-sdk/golem-js';
import { BadRequestException, Injectable } from '@nestjs/common';

import { AppConfigService } from '../config';

@Injectable()
export class GolemService {
  private golemNetworkProvider: GolemNetwork;

  public constructor(private readonly appConfig: AppConfigService) {
    this.golemNetworkProvider = new GolemNetwork({
      api: {
        key: this.appConfig.getInferred('yagnaAppKey'),
        url: 'http://185.238.72.212:7465',
      },
    });
  }

  public async executeTask(file: string): Promise<Result<unknown>> {
    try {
      await this.golemNetworkProvider.connect();
      const order: MarketOrderSpec = {
        demand: {
          workload: { imageTag: 'golem/alpine:latest' },
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
      try {
        await exeUnit.uploadFile(file, `/golem/input/test.sh`);
      } catch (e) {
        console.error('Golem Network Upload Error:', e);
      }
      const response = await exeUnit.run(`ls -la /golem/input`);

      await singleRental.stopAndFinalize();
      return response;
    } catch (err) {
      throw new BadRequestException(err);
    } finally {
      await this.golemNetworkProvider.disconnect();
    }
  }
}
