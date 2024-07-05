import { extractUserId } from "src/utils/token-utils";
import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { IUser } from "src/user/interfaces/user.interface";
import { UserService } from "src/user/user.service";
@Injectable() 
export class CommonService{
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService: UserService,
      ) {}

}