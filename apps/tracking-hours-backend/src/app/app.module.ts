import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';

const uri = 'mongodb+srv://ofarinas12:mWI9xyBg6Jj02V7I@cluster0.lafuehd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

@Module({
  imports: [MongooseModule.forRoot(uri),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService, UserRepository]
})

export class AppModule {
}
