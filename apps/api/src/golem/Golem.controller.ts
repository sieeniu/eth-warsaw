import { Controller } from '@nestjs/common';

import { GolemService } from './Golem.service';

@Controller('golem')
export class GolemController {
  constructor(private readonly golemService: GolemService) {}
}
