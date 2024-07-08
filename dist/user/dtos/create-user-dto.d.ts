import { IUser } from '../interfaces/user.interface';
export declare class UserCreaterDto implements IUser {
    name: string;
    gender: number;
    email: string;
    birth: Date;
    phone: string;
    password: string;
    note: string;
    presenter_id: number;
}
