import { Module } from '@nestjs/common';

import { AuthController } from './Auth.controller';
import { AuthService } from './Auth.service';

@Module({
  imports: [],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
