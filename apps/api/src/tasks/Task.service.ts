import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { FileEntity } from '../file';
import { CreateTaskDto } from './dtos';
import { TaskEntity } from './entities';

@Injectable()
export class TaskService {
  public constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  public async createTask(body: CreateTaskDto, file: Express.Multer.File) {
    const uniqueFileName = `${uuidv4()}${file.size}.sh`;
    const uploadPath = join(__dirname, '../../uploads', uniqueFileName);
    await writeFile(uploadPath, file.buffer);

    const fileRecord = await this.fileRepository.save({
      name: uniqueFileName,
    });

    const task = await this.taskRepository.save({
      fileId: fileRecord.id,
      title: body.title,
      status: 'Utworzono', // todo
    });

    return {
      id: task.id,
      title: task.title,
      fileId: fileRecord.id,
      createdAt: task.createdAt,
    };
  }

  async getTasks() {
    const tasks = await this.taskRepository.find({});

    return {
      items: tasks.map(task => ({
        id: task.id,
        title: task.title,
        status: task.status,
        createdAt: task.createdAt,
      })),
    };
  }
}
