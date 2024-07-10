import { Module } from '@nestjs/common';
import { PresenterService } from './presenter.service';
import { PresenterResolver } from './presenter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresenterEntity } from './entities/presenter.entity';
import { PresenterPrepository } from './presenter.repository';

@Module({
  imports:[TypeOrmModule.forFeature([PresenterEntity,PresenterPrepository])],
  providers: [PresenterResolver, PresenterService],
  exports:[PresenterService],
})
export class PresenterModule {}
