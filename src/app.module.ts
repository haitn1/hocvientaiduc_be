import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresenterModule } from './presenter/presenter.module';
import { ProductModule } from './product/product.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql/dist';
import { ItemModule } from './item/item.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from './config/config.service';
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