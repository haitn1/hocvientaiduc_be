import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from "./dtos/signup.dto";
import { UserEntity } from "src/user/entities/user.entity";
import { LoginDto } from "./dtos/login.dto";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(signupData: SignupDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    login(login: LoginDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    generateUserToken(user: UserEntity): Promise<string>;
    validateUser(email: string, pass: string): Promise<any>;
}
