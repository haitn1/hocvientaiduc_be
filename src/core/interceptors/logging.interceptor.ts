import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('LoggerInterceptor - before call route handle');
        const now = Date.now();
        return next.handle()
        .pipe(
            tap(() => console.log(`LoggerInterceptor - after call route handle`)),
          );
    }
    
}
