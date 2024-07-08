import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dtos/signup.dto";
import { LoginDto } from "./dtos/login.dto";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService) {}

    //POST signup
    @Post('signup') //auth/signup
    async signUp(@Body() signupData : SignupDto){
            console.log(`AuthController - signup #[${JSON.stringify(signupData)}]`);
            return await this.authService.signIn(signupData);
    }
    //POST Login
    @Post('login') //auth/signup
    async login(@Body() data : LoginDto){
            console.log(`AuthController - login #[${JSON.stringify(data)}]`);
            return await this.authService.login(data);
    }
    //POST refresh Token
}