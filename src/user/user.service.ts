
import {  Injectable} from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";

import { UserCreaterDto } from "./dtos/create-user-dto";
import { DataSource, Repository } from "typeorm";
import { umask } from "process";
import { User } from "./entities/user.entity";
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
        u.full_name = user.full_name;
        u.email = user.email;
        u.password = user.password;
        u.phone = user.phone;
        u.gender = user.gender;
        u.birth_day = user.birth_day;
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
          private itemRepo: Repository<User>,
        ) {}

        async findAll(): Promise<User[]> {
          return await this.itemRepo.find();
        }
        async findOne(): Promise<User> {
          return this.itemRepo.findOne({});
        }
  
        async findOneById(user_id: number): Promise<User> {
          return this.itemRepo.findOneBy({ user_id: user_id });
        }
  
        async  create(user: UserCreaterDto):Promise<User> {
          
          const u = new User();
          u.full_name = user.full_name;
          u.email = user.email;
          u.password = user.password;
          u.phone = user.phone;
          u.gender = user.gender;
          u.birth_day = user.birth_day;
          u.note = user.note;
          u.presenter_id = user.presenter_id;
          u.create_at =  new Date();
          u.update_at =  new Date();
           const us =  await this.itemRepo.save(u);
           await console.log(`UserService - Insert new User ${JSON.stringify(us)}`);
          return us;
        }

      user() {
        return  this.itemRepo.findOne({});
      }
      
      async activeByUserId(user_id: number): Promise<User> {
        const user = await this.itemRepo.findOneBy({ user_id: user_id });
        (await user).active = true;
        return await this.itemRepo.save(user);
      }
      
    /*
      async remove(user_id: string): Promise<void> {
        await this.usersRepository.delete(user_id);
      }
*/
}