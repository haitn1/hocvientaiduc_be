
import {  Injectable} from "@nestjs/common";
import { UserCreaterDto } from "./dtos/create-user-dto";
import { UserRepository } from "./user.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";

@Injectable() 
export class UserService {
  
        constructor(
          @InjectRepository(UserEntity)
          public readonly userRepo: UserRepository,
          //private readonly orderService: OrderService,
          
        ) {
            //this.userRepo.orderService = orderService;
        }

  /*    
    async createUserAndOrder(userData: UserEntity, orderData: OrderEntity, manager?: EntityManager): Promise<UserEntity> {
        const user = await manager.create(UserEntity, userData);
        const profile = await manager.create(OrderEntity, orderData);

        await manager.save(user);
        await manager.save(profile);

        return user;
    }
*/
        async findAll(): Promise<any[]> {
          return await this.userRepo.find();
        }
        async findOne(): Promise<any> {
          return this.userRepo.findOne({});
        }
  
        async findOneById(user_id: number): Promise<any> {
          return this.userRepo.findOneBy({ user_id: user_id });
        }
  
        async findOneByEmail(email: string): Promise<any> {
          console.log(`UserService- findOneByEmail email[${email}]`);
          return await this.userRepo.findOneBy({ email: email });
        }
        async  createBySignIn(name: string , email : string , password: string):Promise<any> {
          return await this.userRepo.createBySignIn(name,email,password);
        }

        async  create(user: UserCreaterDto):Promise<any> {
          return await this.userRepo.createUser(user);
        }

      user() {
        return  this.userRepo.findOne({});
      }
      
      async activeByUserId(user_id: number): Promise<any> {
        return await this.userRepo.activeByUserId(user_id);
      }
      
      async remove(user_id: number): Promise<void> {
        await this.userRepo.removeUser(user_id);
      }
}