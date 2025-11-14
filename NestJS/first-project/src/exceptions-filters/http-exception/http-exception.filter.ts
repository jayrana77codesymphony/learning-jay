import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const req = http.getRequest();
    const res = http.getResponse();
    res.json({
      status:exception.getStatus(),
      path:req.originalUrl,
      timestamp:new Date().toISOString(),
      message:exception.message
    })
  }
}
