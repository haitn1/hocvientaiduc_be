import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
   import { AuthService } from './auth.service';
   import { AuthInput } from './dtos/auth.input';
   import { AuthResponse } from './dtos/auth.response';

   @Resolver()
   export class AuthResolver {
     constructor(private readonly authService: AuthService) {}

     @Mutation(() => AuthResponse)
     async login(@Args('authInput') authInput: AuthInput) {
       const user = await this.authService.validateUser(authInput.username, authInput.password);
       if (!user) {
         throw new Error('Invalid credentials');
       }
       return this.authService.login(user);
     }
   }