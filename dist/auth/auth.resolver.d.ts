import { AuthService } from './auth.service';
import { AuthInput } from './dtos/auth.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(authInput: AuthInput): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
