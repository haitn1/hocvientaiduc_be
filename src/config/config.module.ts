import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { JwtModule } from '@nestjs/jwt';


@Global()
@Module({
    imports:[JwtModule],
    providers: [ConfigService],
    exports: [ConfigService],
})
export class ConfigModule {
}
