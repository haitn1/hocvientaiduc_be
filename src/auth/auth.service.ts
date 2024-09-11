import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from "./dtos/signup.dto";
import { UserEntity } from "src/user/entities/user.entity";
import { LoginDto } from "./dtos/login.dto";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { promisify } from "util";
import { Console } from "console";
import { uuid } from 'uuidv4';
@Injectable()
export class AuthService {
 constructor(
  private userService : UserService,
  private jwtService :  JwtService,
 ){}

  async signIn(signupData : SignupDto): Promise<{ access_token: string, refresh_token : string }> {
    const {name, email, password} = signupData;
    const user = await this.userService.findOneByEmail(email);
    if(user){
      throw new UnauthorizedException();
    }
    const hashPass = await bcrypt.hash(password, 10);
    console.log(`signIn : hash pass [${hashPass}]`);
   
    const u = await this.userService.createBySignIn(name,email,hashPass);
    //const payload = { name: u.name, sub: u.user_id };
    const refresh=  uuid() ;

    return  {
     access_token :await this.generateUserToken(u),
     refresh_token : refresh,
     
    }

  }

  async login(login : LoginDto): Promise<{ access_token: string, refresh_token : string }> {
    const { email, password} = login;
    const user = await this.userService.findOneByEmail(email);
    if (user === null) {
      throw new UnauthorizedException();
    }
    const passMatch = await bcrypt.compare(password, user.password);
   if(!passMatch){
      throw new UnauthorizedException('wrong credentials');
   }
   const refresh=  uuid() ;

    return  {
     access_token :await this.generateUserToken(user),
     refresh_token : refresh,
     
    }

  
  }

  async generateUserToken(user: UserEntity){
      const payload = { username: user.email, sub: user.user_id };
      const access_token = this.jwtService.signAsync(payload,{expiresIn:'1h'});

      return access_token;
      
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
