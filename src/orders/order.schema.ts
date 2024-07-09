import { Field, ID, ObjectType } from 'type-graphql';

  @ObjectType('Order')
  export class Order {
    
    @Field()
    id: String;
  
    @Field()
    name: String;

    @Field()
    data: String;
  
    @Field()
    created: Date;

    @Field()
    updated: Date;
  
    
  
  }