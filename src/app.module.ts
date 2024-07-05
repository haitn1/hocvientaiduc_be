import {  MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { User } from './user/entities/user.entity';
import { DataSource } from 'typeorm';
import { PresenterModule } from './presenter/presenter.module';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql/dist';
import { join } from 'path';
import { ItemModule } from './item/item.module';
import { DirectiveLocation, GraphQLDirective } from 'graphql';

@Module({
  imports:[ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hocvientaiduc_db',
    entities:[],
    synchronize: true,
    autoLoadEntities: true,
  }),UserModule, PresenterModule,ProductModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths: ['./**/*.graphql'],
 
  }),
  ItemModule,
],
  controllers: [AppController],
  providers: [AppService ]

})
export class AppModule {

}