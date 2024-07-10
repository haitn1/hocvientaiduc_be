import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Presenter')
export class Presenter {
    @Field(() => ID)
    id:number;

    @Field()
    name:String;

    @Field()
    created:Date;

    @Field()
    updated:Date;
}
