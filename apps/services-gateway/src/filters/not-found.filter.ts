import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { RpcException } from '@nestjs/microservices'

@Catch(RpcException)
export class NotFoundRpcExceptionFilter
  implements RpcExceptionFilter<RpcException>
{
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    console.log('host: ', host, 'exception: ', exception)
    return throwError(() => exception.getError())
  }
}
