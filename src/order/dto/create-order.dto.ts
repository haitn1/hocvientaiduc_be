import { IsString } from "class-validator";

export class CreateOrderDto {
    @IsString()
    type: String;
    
    @IsString()
    name: String;

    @IsString()
    data: String;
}
