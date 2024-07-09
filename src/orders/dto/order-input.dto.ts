import { InputType, Field, ObjectType } from 'type-graphql';

@InputType('OrderInput')
export class OrderInput {
  @Field() id: string;
  @Field() name: string;
  @Field() data: string;
}