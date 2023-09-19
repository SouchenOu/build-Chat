/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useStaticAssets(join(__dirname, '..', 'src', 'static'));
  // app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));
  // app.setViewEngine('ejs');
  await app.listen(6667);
}
bootstrap();
