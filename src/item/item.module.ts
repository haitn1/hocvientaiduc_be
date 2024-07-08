import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';
import { Item } from './item.entity';
import { DateScalar } from 'src/common/scalars/date.scalar';
import { ItemRepository } from './item.repository';


@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemRepository])],
  providers: [ItemResolver, ItemService,DateScalar,],
  exports: [ItemService],
})
export class ItemModule {}