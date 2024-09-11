
import { DeepPartial, Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { UserCreaterDto } from "./dtos/create-user-dto";
//import { OrderService } from "src/orders/order.service";
import * as bcrypt from 'bcrypt';
export class UserRepository extends Repository<UserEntity>{

    //public orderService: OrderService;
    async  createBySignIn(name: string , email : string , password: string):Promise<UserEntity> {
        const u = new UserEntity();
        u.name = name;
        u.email = email;
        u.password = password;
        return await this.save(u);
      }

      async  createUser(user: UserCreaterDto):Promise<UserEntity> {
          
        const u = new UserEntity();
        u.name = user.name;
        u.email = user.email;
        
        u.password = user.password;
        u.phone = user.phone;
        u.gender = user.gender;
        u.birth = user.birth;
        u.note = user.note;
        u.presenter_id = user.presenter_id;
        u.created =  new Date();
        u.updated =  new Date();
        const ii = this.create(u);
         const us =  await this.save(ii);
         await console.log(`UserService - Insert new User ${JSON.stringify(us)}`);
        return us;
      }

      async activeByUserId(user_id: number): Promise<UserEntity> {
        const user = await this.findOneBy({ user_id: user_id });
        (await user).active = true;
        return await 
        this.save(user);
      }

      async removeUser(user_id: number): Promise<void> {
        await this.delete(user_id);
      }
}