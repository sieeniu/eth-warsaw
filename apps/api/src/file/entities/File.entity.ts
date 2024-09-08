import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TaskEntity } from '../../tasks';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @OneToMany(() => TaskEntity, task => task.file)
  files: FileEntity[];

  @CreateDateColumn()
  createdAt!: Date;
}
