import { UserEntity } from "../entities/user.entity";
import { IUser } from "src/user/interfaces/user.interface";
export declare class UserInfoResponseDto implements IUser {
    constructor(user: UserEntity);
    user_id: number;
    name: string;
    email: string;
    gender: number;
    note: string;
    birth: Date;
    phone: string;
}
