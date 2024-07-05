import { User } from "../entities/user.entity";
import { IUser } from "src/user/interfaces/user.interface";
export declare class UserInfoResponseDto implements IUser {
    constructor(user: User);
    user_id: number;
    full_name: string;
    email: string;
    gender: number;
    note: string;
    birth_day: Date;
    phone: string;
}
