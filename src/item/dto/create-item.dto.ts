import { ObjectType, Field, ID } from 'type-graphql';
import { Item } from '../item.entity';

export class CreateItemDto extends Item {
  name: string;
}
