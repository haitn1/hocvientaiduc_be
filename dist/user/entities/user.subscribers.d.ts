import { DataSource, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { UserEntity } from './user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
    constructor(dataSource: DataSource);
    listenTo(): typeof UserEntity;
    beforeInsert(event: InsertEvent<UserEntity>): void;
    afterInsert(event: InsertEvent<UserEntity>): void | Promise<any>;
}
