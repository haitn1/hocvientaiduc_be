import { DataSource, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { User } from './user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(dataSource: DataSource);
    listenTo(): typeof User;
    beforeInsert(event: InsertEvent<User>): void;
    afterInsert(event: InsertEvent<User>): void | Promise<any>;
}
