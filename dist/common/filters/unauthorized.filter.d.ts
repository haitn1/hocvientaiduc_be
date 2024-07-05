import { ArgumentsHost } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
export declare class UnauthorizedFilter implements GqlExceptionFilter {
    catch(exception: any, host: ArgumentsHost): Error;
}
