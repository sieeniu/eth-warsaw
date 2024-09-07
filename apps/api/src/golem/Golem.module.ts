import { Module } from '@nestjs/common';

import { GolemController } from './Golem.controller';
import { GolemService } from './Golem.service';

@Module({
  imports: [],
  controllers: [GolemController],
  providers: [GolemService],
  exports: [GolemService],
})
export class GolemModule {}
