import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import * as serviceAccount from './vegatise-1bad9-firebase-adminsdk-3p3md-91a17b07ba.json';

const firebase_params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientX509CertUrl: serviceAccount.client_x509_cert_url,
};

async function bootstrap() {
  try {
    // Initialize Firebase Admin SDK
    admin.initializeApp({
      credential: admin.credential.cert(firebase_params),
      storageBucket: 'vegatise-1bad9.appspot.com',
    });

    // Create NestJS application
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: 'http://localhost:3000',
      credentials: false, // You may need to set this option if your frontend sends cookies
    });
    // Start listening for incoming requests
    await app.listen(8000);
    console.log('NestJS application is running on port 6000');
  } catch (error) {
    console.error('Error during bootstrap:', error);
    process.exit(1); // Exit the process with an error code
  }
}

bootstrap();
