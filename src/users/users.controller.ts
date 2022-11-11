import { Controller, Post, Body, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiHeader } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto.username);
  }

  @Get('profile')
  @ApiHeader({ name: 'Authorization', description: 'Bearer {JWT}' })
  async getProfile(@Request() req) {
    return req.user;
  }
}
