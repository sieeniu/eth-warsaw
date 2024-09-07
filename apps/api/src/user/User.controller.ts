import { Controller, Get } from '@nestjs/common';

import { UserService } from './User.service';

@Controller('user')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Get()
  public async getUserList() {
    return this.userService.getUserList();
  }
}
