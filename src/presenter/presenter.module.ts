import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Presenter } from './entities/presenter.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Presenter])]
})
export class PresenterModule {}
