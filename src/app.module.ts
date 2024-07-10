import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresenterModule } from './presenter/presenter.module';
import { OrderModule } from './order/order.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql/dist';

import { AuthModule } from './auth/auth.module';

@Module({
  imports:[ 
  AuthModule,
  UserModule, 
  OrderModule,
  PresenterModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths: ['./**/*.graphql'],
    installSubscriptionHandlers: true,
    context: ({req}) => ({...req}),
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