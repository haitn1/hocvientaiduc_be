import { InputType, Field } from 'type-graphql';

@InputType()
export class ItemInput {
  @Field() name: string;
  @Field() user_id: number;
}