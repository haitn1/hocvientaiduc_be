import {
    DataSource,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  
import { User } from '../shemas/user.schema';
  
  @EventSubscriber()
  export class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(dataSource: DataSource) {
      dataSource.subscribers.push(this);
    }
  
    listenTo() {
      return User;
    }
  
    beforeInsert(event: InsertEvent<User>) {
      console.log(`UserSubscriber- BEFORE USER INSERTED: `, event.entity);
    }

    afterInsert(event: InsertEvent<User>): void | Promise<any> {
      console.log(`UserSubscriber- After USER INSERTED: `, event.entity);
    }
  }