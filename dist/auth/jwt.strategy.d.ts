import { UserService } from '../user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<any>;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UserService);
    validate(payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
