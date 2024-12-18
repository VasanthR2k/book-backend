import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParse from 'cookie-parser'; 
import * as requestIP from 'request-ip';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(cookieParse())
  app.use(requestIP.mw())
  await app.listen(3000);

}
bootstrap();
