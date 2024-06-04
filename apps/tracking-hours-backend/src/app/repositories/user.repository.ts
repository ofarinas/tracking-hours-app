import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

Injectable();
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  async createUser(userData: any): Promise<User> {
    const user = new this.userModel(userData);
    return user.save();
  }

  async findUserByEmail(name: string): Promise<User | null> {
    return this.userModel.findOne({ name }).exec();
  }

}