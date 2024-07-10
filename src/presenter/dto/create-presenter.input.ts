import { IsNumber, IsString } from "class-validator";

export class CreatePresenterInput {
    @IsNumber()
    id : number;
    @IsString()
    name : string;
}
