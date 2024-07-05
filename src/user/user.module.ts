import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserEntity } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSubscriber } from "./entities/user.subscribers";
import { UserResolver } from './user.resolver';
import { User } from "./models/user.model";


@Module({
imports:[TypeOrmModule.forFeature([User])],
controllers: [UserController],
providers:[UserService ,UserSubscriber, UserResolver]
})
export class UserModule{
}
