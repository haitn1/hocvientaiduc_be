import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from "./dtos/signup.dto";
import { User } from "src/user/entities/user.entity";
import { LoginDto } from "./dtos/login.dto";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { promisify } from "util";
import { Console } from "console";
@Injectable()
export class AuthService {
 constructor(
  private userService : UserService,
  private jwtService :  JwtService,
 ){}

  async signIn(signupData : SignupDto) {
    const {name, email, password} = signupData;
    const user = await this.userService.findOneByEmail(email);
    if(user){
      throw new UnauthorizedException();
    }
    const hashPass = await bcrypt.hash(password, 10);
    console.log(`signIn : hash pass [${hashPass}]`);
   
    const u = await this.userService.createBySignIn(name,email,hashPass);
    //const payload = { name: u.name, sub: u.user_id };
    return {
      access_token: await this.generateUserToken(u),
      message: 'Success' 
    //access_token : `dsfkjhdsk fhkrhg djgkhkgldr`,
    };
  }

  async login(login : LoginDto) {
    const { email, password} = login;
    const user = await this.userService.findOneByEmail(email);
    if (user === null) {
      throw new UnauthorizedException();
    }
    const passMatch = await bcrypt.compare(password, user.password);
   if(!passMatch){
      throw new UnauthorizedException('wrong credentials');
   }
    //const payload = { username: user.name, sub: user.user_id };
    return {
      access_token: await this.generateUserToken(user),
     // access_token : `dsfkjhdsk fhkrhg djgkhkgldr`,
      message: 'Success' 
    };
  }

  async generateUserToken(user: User){
      const access_token = this.jwtService.sign({user_id : user.user_id},{expiresIn:'1h'});
      return access_token;
  }
    
}
