import { Controller, Get } from '@nestjs/common';

import { GolemService } from './Golem.service';
import { Result } from '@golem-sdk/golem-js';

@Controller('golem')
export class GolemController {
  constructor(private readonly golemService: GolemService) {}

  @Get('test')
  public async test(): Promise<Result<unknown>> {
    return await this.golemService.executeTask();
  }
}
