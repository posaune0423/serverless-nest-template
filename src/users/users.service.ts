import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { IUser } from './interface/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.find({
      where: {
        id: id,
      },
      take: 1,
    });

    if (user.length === 1) {
      return user[0];
    }

    return undefined;
  }

  async create(username: string): Promise<IUser> {
    const user = new User();
    user.username = username;

    const result = await this.userRepository.save(user);
    const { ...newUser } = result;
    return newUser;
  }
}