import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from "./dtos/signup.dto";
import { User } from "src/user/entities/user.entity";
import { LoginDto } from "./dtos/login.dto";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(signupData: SignupDto): Promise<{
        access_token: string;
        message: string;
    }>;
    login(login: LoginDto): Promise<{
        access_token: string;
        message: string;
    }>;
    generateUserToken(user: User): Promise<string>;
}
