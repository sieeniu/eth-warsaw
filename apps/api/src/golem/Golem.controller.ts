import { Result } from '@golem-sdk/golem-js';
import { Controller, Get } from '@nestjs/common';

import { GolemService } from './Golem.service';

@Controller('golem')
export class GolemController {
  constructor(private readonly golemService: GolemService) {}

  @Get('test')
  public async test(): Promise<Result<unknown>> {
    return await this.golemService.executeTask();
  }
}
