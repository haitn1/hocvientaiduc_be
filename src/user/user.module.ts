import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserEntity } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSubscriber } from "./entities/user.subscribers";
import { UserResolver } from './user.resolver';
import { DateScalar } from "src/common/scalars/date.scalar";
import { ItemService } from "src/item/item.service";
import { UserRepository } from "./user.repository";
import { ItemModule } from "src/item/item.module";


@Module({
imports:[TypeOrmModule.forFeature([UserEntity,UserRepository]),ItemModule],
controllers: [UserController],
providers:[UserService ,UserSubscriber, UserResolver,DateScalar],
exports :[UserService]
})
export class UserModule{
}
