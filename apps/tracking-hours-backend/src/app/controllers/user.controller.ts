import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../schemas/user';

@Controller
('users')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Post('create')
  async createUser(@Body() body: { user: string, password: string }) {
    Logger.log('name', body.user);
    console.log('name', body.user);
    return this.userService.createUser(body.user, body.password);
  }

  @Get('login')
  async login(@Query('user') user: string, @Query('password') password: string) {
    return this.userService.login(user, password);
  }
}