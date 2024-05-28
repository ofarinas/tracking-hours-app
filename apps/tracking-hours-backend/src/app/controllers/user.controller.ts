import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../schemas/user';

@Controller
('users')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Post('create')
  async createUser(@Body() body: { name: string }): Promise<User> {
    Logger.log('name', body.name);
    console.log('name', body.name);
    return this.userService.createUser(body.name);
  }

  @Get('find')
  async findUserByEmail(@Query('name') name: string): Promise<User | null> {


    return this.userService.findUserByEmail(name);
  }
}