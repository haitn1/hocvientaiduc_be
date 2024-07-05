import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSubscriber } from "./entities/user.subscribers";
import { UserResolver } from './user.resolver';
import { DateScalar } from "src/common/scalars/date.scalar";


@Module({
imports:[TypeOrmModule.forFeature([User])],
controllers: [UserController],
providers:[UserService ,UserSubscriber, UserResolver,DateScalar]
})
export class UserModule{
}
