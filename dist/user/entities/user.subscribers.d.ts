import { EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { User } from '../shemas/user.schema';
import { UserRepository } from '../user.repository';
import { UserEntity } from './user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(userRepo: UserRepository);
    listenTo(): typeof UserEntity;
    beforeInsert(event: InsertEvent<any>): void;
    afterInsert(event: InsertEvent<any>): void | Promise<any>;
}
