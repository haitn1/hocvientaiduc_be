import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => Int)
  user_id: number;

  @Field()
  full_name : string;

  @Field()
  gender : number;

  @Field()
  email : string;

  @Field()
  birth_day : Date;

  @Field()
  phone : string;

  @Field()
  password : string;

  @Field()
  note : string;

  @Field()
  presenter_id:number;

 @Field()
  create_at : Date;

  @Field()
  update_at : Date;


}