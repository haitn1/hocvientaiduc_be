import { UnauthorizedException } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';
export function checkExpDate(exp: number):void{
    try{
        if(exp*1000< Date.now()){
            throw new UnauthorizedException('JWT Token has been expired.');
        }
    }catch(exception){
        throw new UnauthorizedException('JWT Token is malformed,')
    }
}
export function extractUserId(token:string):Number{
    try{
const decodedToken = jwt.verify(token,"") as {
    userId: number;
    exp: number;
};

checkExpDate(decodedToken.exp);
return decodedToken.userId;
    }catch(exception){
        throw new UnauthorizedException('JWT Token is malformed.');
    }
}