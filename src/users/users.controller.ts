import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async list() {
    return await this.usersService.findAll();
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto.name);
  }
}
