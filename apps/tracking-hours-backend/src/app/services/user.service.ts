import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {
  }

  async createUser(name: string, password: string): Promise<boolean> {
    await this.userRepository.createUser({ name, password });
    return true;
  }


  async login(email: string, password: string) {
    return !! await this.userRepository.login(email, password);
  }

}