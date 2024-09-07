import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserEntity } from './entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async getUserList() {
    const users = await this.userRepository.find({});

    return users;
  }
}
