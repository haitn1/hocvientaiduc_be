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
import { ItemModule } from './item/item.module';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from './config/config.service';
import config from './config/config';
import { ConfigModule } from './config/config.module';

@Module({
  imports:[ 
  AuthModule,
  UserModule, 
  PresenterModule,
  ProductModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths: ['./**/*.graphql'],
    installSubscriptionHandlers: true,
  }),
  ItemModule,

  JwtModule.registerAsync({
    imports : [ConfigModule],
    useFactory : async(config)=>({
      secret : 'secret_123456',
    }),
    global : true,
    inject : [ConfigService]
  }),

  TypeOrmModule.forRoot({
     type: 'mysql',
      host: 'localhost',
      port: 3306,
      username:  'root',
      password:'',
      database: 'hocvientaiduc_db',
      entities:[],
      synchronize: true,
      autoLoadEntities: true,
}),
],
  controllers: [AppController],
  providers: [AppService ]

})
export class AppModule {

}