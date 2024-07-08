import { AuthService } from "./auth.service";
import { SignupDto } from "./dtos/signup.dto";
import { LoginDto } from "./dtos/login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signupData: SignupDto): Promise<{
        access_token: string;
        message: string;
    }>;
    login(data: LoginDto): Promise<{
        access_token: string;
        message: string;
    }>;
}
