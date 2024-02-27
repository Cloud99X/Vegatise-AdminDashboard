import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    // Initialize Firebase Admin SDK
    // admin.initializeApp({
    //   credential: admin.credential.cert(firebase_params),
    //   storageBucket: 'vegatise-1bad9.appspot.com',
    // });

    // Create NestJS application
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: 'http://localhost:3000',
      credentials: false, // You may need to set this option if your frontend sends cookies
    });
    // Start listening for incoming requests
    await app.listen(8000);
    console.log('NestJS application is running on port 8000');
  } catch (error) {
    console.error('Error during bootstrap:', error);
    process.exit(1); // Exit the process with an error code
  }
}

bootstrap();
