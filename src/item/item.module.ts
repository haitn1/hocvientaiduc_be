import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';
import { Item } from './item.entity';
import { DateScalar } from 'src/common/scalars/date.scalar';
import { ItemRepository } from './item.repository';
import { ItemInput } from './dto/item-input.dto';


@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemRepository])],
  providers: [ItemResolver, ItemService,DateScalar,ItemInput],
  exports: [ItemService],
  
})
export class ItemModule {}