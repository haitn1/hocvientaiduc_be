import {
    DataSource,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  
import { User } from '../shemas/user.schema';
import { UserRepository } from '../user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
  
  @EventSubscriber()
  export class UserSubscriber implements EntitySubscriberInterface<User> {
    constructor(
      @InjectRepository(UserEntity) userRepo: UserRepository) {
      //userRepo.subscribers.push(this);
    }
  
    listenTo() {
      return UserEntity;
    }
  
    beforeInsert(event: InsertEvent<any>) {
      console.log(`UserSubscriber- BEFORE USER INSERTED: `, event.entity);
    }

    afterInsert(event: InsertEvent<any>): void | Promise<any> {
      console.log(`UserSubscriber- After USER INSERTED: `, event.entity);
    }
  }