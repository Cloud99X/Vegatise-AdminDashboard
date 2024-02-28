import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DriversDataModule } from './drivers-data/divers-data.module';
import { DriverInfoModule } from './driver-info/driver-info.module';
import * as admin from 'firebase-admin';
import { DocumentStatusModule } from './documentStatus/status.module';
import { DrivingLicenseModule } from './driving-license/driving-license.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DriversDataModule,
    DriverInfoModule,
    DocumentStatusModule,
    DrivingLicenseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    const firebaseAdminConfig = {
      credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    };
    admin.initializeApp(firebaseAdminConfig);
  }
}
