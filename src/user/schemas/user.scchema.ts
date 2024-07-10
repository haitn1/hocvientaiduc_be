
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('user')
export class User{
   
   @Field(() => ID)
   user_id : number;

   @Field()
   name : string;

   @Field()
   gender : number;

   @Field()
   email : string;

   @Field()
   birth : Date;

   @Field()
   phone : string;

   @Field()
   password : string;

   @Field()
   note : string;

   @Field()
   presenter_id:number;

   @Field()
   active:boolean;

   @Field()
   created : Date;

   @Field()
   updated : Date;
}