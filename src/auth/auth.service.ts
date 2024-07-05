import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
/*
  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.full_name, sub: user.user_id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
    */
}
