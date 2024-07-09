import { UserEntity } from "../entities/user.entity";
import { IUser } from "src/user/interfaces/user.interface";

export class UserInfoResponseDto implements IUser{
    constructor(user: UserEntity){
        this.user_id = user.user_id;
        this.name = user.name;
        this.email = user.email;
        this.gender = user.gender;
        this.phone = user.phone;
        this.birth = user.birth;
        this.note = user.note;
    }
    user_id: number;
    name:string;
    email:string;
    gender : number;
    note : string;
    birth : Date;
    phone : string;
    
}