import { AuthService } from "./auth.service";
import { SignupDto } from "./dtos/signup.dto";
import { LoginDto } from "./dtos/login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signupData: SignupDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    login(data: LoginDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    getProfile(req: any): any;
}
