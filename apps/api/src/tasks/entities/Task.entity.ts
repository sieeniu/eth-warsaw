import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { FileEntity } from '../../file';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  fileId!: string;

  @ManyToOne(() => FileEntity, file => file.files)
  file!: FileEntity;

  @CreateDateColumn()
  createdAt!: string;
}
