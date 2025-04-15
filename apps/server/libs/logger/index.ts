import { Request, Response, NextFunction } from 'express';
import winston from 'winston';

const { combine, timestamp, json, printf } = winston.format;
const timestampFormat = 'MMM-DD-YYYY HH:mm:ss';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default class Logger {
  private static infoLogger = winston.createLogger({
    level: 'info',
    format: combine(
      timestamp({ format: timestampFormat }),
      json(),
      printf(({ level, message, timestamp }) => {
        return `[${timestamp}] [${level}]: ${message}`;
      })
    ),
    // Disable logging to file when running on Vercel platform
    transports: (NODE_ENV === 'vercel') ? [
      new winston.transports.Console(), // Add a console transport to log information to console
    ] : [
      new winston.transports.File({
        filename: 'logs/' + new Date().toISOString().split('T')[0] + '.log',
        level: 'info',
      }),
    ],
  });

  private static errorLogger = winston.createLogger({
    level: 'error',
    format: combine(
      timestamp({ format: timestampFormat }),
      json(),
      printf(({ level, message, timestamp }) => {
        return `[${timestamp}] [${level}]: ${message}`;
      })
    ),
    transports: (NODE_ENV === 'vercel') ? [
      new winston.transports.Console(), // Add a console transport to log information to console
    ] : [
      new winston.transports.File({
        filename: 'logs/' + new Date().toISOString().split('T')[0] + '.log',
        level: 'error',
      }),
    ],
  });

  static info(message: string) {
    Logger.infoLogger.info(message);
  }

  static error(message: string) {
    Logger.errorLogger.error(message);
  }


  static useLogger(request: Request, response: Response, next: NextFunction) {
    const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    const method = request.method;
    const url = request.url;
    
    response.on('finish', () => {

      const status = response.statusCode;
      const message = `${method} ${url.split('?')[0]} ${status} ${ip} ${response.statusMessage}`;
      
      //if response has error 
      if (status >= 400) {
        Logger.error(message);
      } else {
        Logger.info(message);
      }

    });

    next();
  }
}




