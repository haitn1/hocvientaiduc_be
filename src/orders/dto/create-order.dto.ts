import { ObjectType, Field, ID } from 'type-graphql';
import { OrderEntity } from '../entities/order.entity';

export class CreateOrderDto extends OrderEntity {
  name: string;
}
