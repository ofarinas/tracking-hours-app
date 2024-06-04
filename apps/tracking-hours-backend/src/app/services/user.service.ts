import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../schemas/user';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {
  }

  async createUser(name: string): Promise<User> {
    const user = await this.userRepository.createUser({ name });
    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findUserByEmail(email);
  }

}