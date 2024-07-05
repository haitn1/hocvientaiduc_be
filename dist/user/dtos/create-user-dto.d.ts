import { IUser } from '../interfaces/user.interface';
export declare class UserCreaterDto implements IUser {
    full_name: string;
    gender: number;
    email: string;
    birth_day: Date;
    phone: string;
    password: string;
    note: string;
    presenter_id: number;
}
