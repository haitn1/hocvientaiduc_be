import { ObjectType, Field, ID } from 'type-graphql';
import { OrderEntity } from '../order.entity';

export class CreateOrderDto extends OrderEntity {
  name: string;
}
