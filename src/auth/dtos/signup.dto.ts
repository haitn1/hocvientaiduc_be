import { ObjectType, extend } from "@nestjs/graphql";
import { IsEmail, IsString, Matches, MinLength, isString } from "class-validator";


//@ObjectType('Signup')

export class SignupDto {
    @IsString()
    name : string;
      
    @IsEmail()
    email : string;

    @IsString()
    @MinLength(6)
    @Matches(/^(?=.*[0-9])/,{message:'Password must contain at least one number'})
    password : string;
}