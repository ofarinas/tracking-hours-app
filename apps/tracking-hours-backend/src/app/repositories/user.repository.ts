import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

Injectable();

export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  async createUser(userData: any) {
    const user = new this.userModel(userData);
    return user.save();
  }

  async login(user: string, password: string) {
    return this.userModel.findOne({ name: user, password: password }).exec();
  }

}