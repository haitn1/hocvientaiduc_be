
import{IsDate, IsEmail, IsNumber, IsString} from 'class-validator'
import {IUser} from '../interfaces/user.interface';
export class UserCreaterDto implements IUser{
    
    @IsString()
    name : string;
 
    @IsString()
    gender : number;
 
    @IsString()
    email : string;
 
    @IsDate()
    birth : Date;
 
    @IsString()
    phone : string;
 
    @IsString()
    password : string;
 
    @IsString()
    note : string;


    @IsNumber()
    presenter_id : number;
 
}
