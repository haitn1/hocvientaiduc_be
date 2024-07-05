import {  MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UserEntity } from './user/entities/user.entity';
import { DataSource } from 'typeorm';
import { PresenterModule } from './presenter/presenter.module';
import { ProductModule } from './product/product.module';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql/dist';
import { join } from 'path';
import { AuthorsResolver } from './authors/authors.resolver';

@Module({
  imports:[ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hocvientaiduc_db',
    entities:[UserEntity],
    synchronize: true,
    autoLoadEntities: true,
  }),UserModule, PresenterModule,ProductModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'schema.gql',
  }),
],
  controllers: [AppController],
  providers: [AppService, AuthorsResolver ]

})
export class AppModule {

}