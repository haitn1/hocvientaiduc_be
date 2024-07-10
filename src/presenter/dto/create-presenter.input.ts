import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";

@InputType('CreatePresenterInput')
export class CreatePresenterInput {
    @IsNumber()
    @Field(() => ID)
    id : number;

    @IsString()
    @Field()
    name : string;
}
