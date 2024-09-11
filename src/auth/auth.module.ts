import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports :[UserModule, JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60m' },
      }),
  ],
    controllers:[AuthController],
    providers : [AuthService,
      JwtStrategy,
     /*   {
        provide: APP_GUARD,
        useClass: AuthGuard,
      }*/
        ],
    exports : [AuthService]
})
export class AuthModule {}
