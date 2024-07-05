import {
    DataSource,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { UserEntity } from './user.entity';
  
  @EventSubscriber()
  export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
    constructor(dataSource: DataSource) {
      dataSource.subscribers.push(this);
    }
  
    listenTo() {
      return UserEntity;
    }
  
    beforeInsert(event: InsertEvent<UserEntity>) {
      console.log(`UserSubscriber- BEFORE USER INSERTED: `, event.entity);
    }

    afterInsert(event: InsertEvent<UserEntity>): void | Promise<any> {
      console.log(`UserSubscriber- After USER INSERTED: `, event.entity);
    }
  }