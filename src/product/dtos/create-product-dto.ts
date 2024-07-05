import { IsString } from "class-validator";

export class ProductCreaterDto{
    @IsString()
    name : string;
}

