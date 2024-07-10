import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
    imports :[UserModule, JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),
  ],
    controllers:[AuthController],
    providers : [AuthService,
     /*   {
        provide: APP_GUARD,
        useClass: AuthGuard,
      }*/
        ],
    exports : [AuthService]
})
export class AuthModule {}
