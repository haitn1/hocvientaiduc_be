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

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql/dist';
import { join } from 'path';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports:[ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hocvientaiduc_db',
    entities:[User],
    synchronize: true,
    autoLoadEntities: true,
  }),UserModule, PresenterModule,ProductModule,
  RecipesModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
],
  controllers: [AppController],
  providers: [AppService ]

})
export class AppModule {

}