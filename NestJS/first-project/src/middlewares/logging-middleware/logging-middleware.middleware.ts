import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class LoggingMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(`Request Received : 
      Method : ${req.method} \
      URL : ${req.originalUrl}`);
    next();
  }
}
