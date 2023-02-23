import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const serverPort = +process.env.SERVER_PORT;
  //const clientPort = 8080;

  //app.enableCors({
  //  origin: [
  //    `http://localhost:${clientPort}`,
  //    new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$/`),
  //  ],
  //});

  await app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}...`);
  });
}
bootstrap();
