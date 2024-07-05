import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserController } from 'src/user/user.controller';
import { LoggerInterceptor } from './interceptors/logging.interceptor';
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';

@Module({
providers : [
    {provide : APP_INTERCEPTOR , useClass : LoggerInterceptor},
],
})
export class CoreModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware,UserController);
    }
}
