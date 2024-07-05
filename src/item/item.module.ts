import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';
import { Item } from './item.entity';
import { DateScalar } from 'src/common/scalars/date.scalar';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemResolver, ItemService,DateScalar],
})
export class ItemModule {}