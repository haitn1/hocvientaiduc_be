
import {  Injectable, OnModuleInit} from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";

import { UserCreaterDto } from "./dtos/create-user-dto";
import { Repository, EntityManager, Transaction } from 'typeorm';
import { umask } from "process";
import { User } from "./entities/user.entity";
import { Item } from "src/item/item.entity";
import { ItemService } from "src/item/item.service";
import { ModuleRef } from "@nestjs/core";
import { UserRepository } from "./user.repository";
import { ItemInput } from "src/item/dto/item-input.dto";
import { SignupDto } from "src/auth/dtos/signup.dto";

@Injectable() 
export class UserService {
  
    /*
    constructor(private dataSource: DataSource) {}
    
      findAll(): Promise<User[]> {
        return this.dataSource.manager.find(User);
      }
  
      async findOneByEmail(user_id: number): Promise<User> {
        return this.dataSource.manager.findOneBy({ user_id: user_id });
      }

      async  create(user: UserCreaterDto):Promise<User> {
        
        const u = new User();
        u.name = user.name;
        u.email = user.email;
        u.password = user.password;
        u.phone = user.phone;
        u.gender = user.gender;
        u.birth = user.birth;
        u.note = user.note;
        u.presenter_id = user.presenter_id;
        u.create_at =  new Date();
        u.update_at =  new Date();
         const us =  await this.dataSource.manager.save(u);
         await console.log(`UserService - Insert new User ${JSON.stringify(us)}`);
        return us;
      }
*/
        constructor(
          // Khai báo Repository để kết nối db
          @InjectRepository(User)
          public readonly userRepo: UserRepository,
          private readonly itemService: ItemService,
          
        ) {
            this.userRepo.itemService = itemService;
        }

      
    async createUserAndProfile(userData: User, profileData: Item, manager?: EntityManager): Promise<User> {
        const user = await manager.create(User, userData);
        const profile = await manager.create(Item, profileData);

        await manager.save(user);
        await manager.save(profile);

        return user;
    }

        async findAll(): Promise<User[]> {
          return await this.userRepo.find();
        }
        async findOne(): Promise<User> {
          return this.userRepo.findOne({});
        }
  
        async findOneById(user_id: number): Promise<User> {
          return this.userRepo.findOneBy({ user_id: user_id });
        }
  
        async findOneByEmail(email: string): Promise<User> {
          console.log(`UserService- findOneByEmail email[${email}]`);
          return await this.userRepo.findOneBy({ email: email });
        }
        async  createBySignIn(name: string , email : string , password: string):Promise<User> {
          const u = new User();
          u.name = name;
          u.email = email;
          u.password = password;
          return await this.userRepo.save(u);
        }

        async  create(user: UserCreaterDto):Promise<User> {
          
          const u = new User();
          u.name = user.name;
          u.email = user.email;
          u.password = user.password;
          u.phone = user.phone;
          u.gender = user.gender;
          u.birth = user.birth;
          u.note = user.note;
          u.presenter_id = user.presenter_id;
          u.create_at =  new Date();
          u.update_at =  new Date();
           const us =  await this.userRepo.save(u);
           await console.log(`UserService - Insert new User ${JSON.stringify(us)}`);
          return us;
        }

      user() {
        return  this.userRepo.findOne({});
      }
      
      async activeByUserId(user_id: number): Promise<User> {
        const user = await this.userRepo.findOneBy({ user_id: user_id });
        (await user).active = true;
        return await this.userRepo.save(user);
      }
      
      async remove(user_id: number): Promise<void> {
        await this.userRepo.delete(user_id);
      }

      async itemsAdded(user_id: number, name:string ): Promise<Item> {
        const item = new ItemInput();
        item.name = name;
        item.user_id = user_id;
        return this.itemService.createByItemInput( item);
      }
      
    
      

}