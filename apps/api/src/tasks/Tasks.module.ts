import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FileEntity } from '../file';
import { TaskEntity } from './entities';
import { TaskController } from './Task.controller';
import { TaskService } from './Task.service';
import { GolemService } from '../golem/Golem.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, FileEntity])],
  controllers: [TaskController],
  providers: [TaskService, GolemService],
  exports: [TaskService],
})
export class TasksModule {}
