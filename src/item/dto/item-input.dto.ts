import { InputType, Field, ObjectType } from 'type-graphql';

@InputType('ItemInput')
export class ItemInput {
  @Field() name: string;
  @Field() user_id: number;
}