import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { GolemService } from '../golem/Golem.service';
import { CreateTaskDto } from './dtos';
import { TaskService } from './Task.service';

@Controller('task')
export class TaskController {
  public constructor(
    private readonly taskService: TaskService,
    private readonly golemService: GolemService,
  ) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('createTask')
  public async createTask(
    @Body() body: CreateTaskDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.taskService.createTask(body, file);
  }
}
