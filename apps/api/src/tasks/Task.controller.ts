import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CreateTaskDto } from './dtos';
import { TaskService } from './Task.service';

@Controller('task')
export class TaskController {
  public constructor(private readonly taskService: TaskService) {}

  @Get(':id')
  public async getTask(@Param('id') taskId: string) {
    return await this.taskService.getTask(taskId);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('createTask')
  public async createTask(
    @Body() body: CreateTaskDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.taskService.createTask(body, file);
  }

  @Get()
  public async list() {
    return await this.taskService.getTasks();
  }
}
