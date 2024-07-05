import { DynamicModule, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { resolve } from "path";

@Module({

})
export class DatabaseModule{
    static async forRoot():Promise<DynamicModule>{
            await new Promise(resolve=> setTimeout(resolve,1000));
            return {
                module : DatabaseModule,
                imports :[
                    TypeOrmModule.forRoot({
                        type: 'mysql',
                        host: '125.212.218.93',
                        port: 3306,
                        username: 'root_haitn',
                        password: 'HVTD01!@1986',
                        database: 'hocvientaiduc_db',
                        synchronize: true,
                        keepConnectionAlive: true,
                        retryAttempts: 2,
                        retryDelay: 1000,

                      })
                ]
            }
    }
}