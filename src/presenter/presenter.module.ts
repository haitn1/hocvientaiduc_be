import { Module } from '@nestjs/common';
import { PresenterService } from './presenter.service';
import { PresenterResolver } from './presenter.resolver';

@Module({
  providers: [PresenterResolver, PresenterService],
})
export class PresenterModule {}
