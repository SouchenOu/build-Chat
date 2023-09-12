import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js'
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // in origin we put the url of our application frontend
    origin: 'http://localhost:3000',
    credentials: true,
    //all headers that client are allowd to use
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'X-Requested-With',
      'apollo-require-preflight',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS',]
  });
  app.use(cookieParser())
  app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 1}))
  /* then lets configure our validation pipe , the validation pipe have two imports (whitelist and transform), the whitelist make sure that we dont receive 
  unwanted data from the frontend and what data we want to receive, we will specify in our DTO file, and we have transform which allows us to convert strings coming from the frontend into different types 
  meaning for example if we have a string which is  correctly formated  as a date then we can convert it into a date object   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory(errors){
        /* i use reduce here to take all the elements of the array and put them into a single object and then we format it in a way 
        that we can display the errors nicely on our frontend */
          const formattedErrors = errors.reduce((accumulator, error) => {
            accumulator[error.property] = Object.values(error.constraints).join(', ',);
            return accumulator;

          }, {});
          throw new BadRequestException(formattedErrors);
        
      },

    }),
  );
  await app.listen(3001);
}
bootstrap();
