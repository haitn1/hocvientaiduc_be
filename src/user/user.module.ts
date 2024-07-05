import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSubscriber } from "./entities/user.subscribers";


@Module({
imports:[TypeOrmModule.forFeature([User])],
controllers: [UserController],
providers:[UserService ,UserSubscriber]
})
export class UserModule{
}
