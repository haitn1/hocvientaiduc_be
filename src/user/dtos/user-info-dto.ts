import { User } from "../entities/user.entity";
import { IUser } from "src/user/interfaces/user.interface";

export class UserInfoResponseDto implements IUser{
    constructor(user: User){
        this.user_id = user.user_id;
        this.full_name = user.full_name;
        this.email = user.email;
        this.gender = user.gender;
        this.phone = user.phone;
        this.birth_day = user.birth_day;
        this.note = user.note;
    }
    user_id: number;
    full_name:string;
    email:string;
    gender : number;
    note : string;
    birth_day : Date;
    phone : string;
    
}