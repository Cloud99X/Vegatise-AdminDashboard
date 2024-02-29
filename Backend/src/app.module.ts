import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DriversDataModule } from './drivers-data/divers-data.module';
import { DriverInfoModule } from './driver-info/driver-info.module';
import * as admin from 'firebase-admin';
import { DocumentStatusModule } from './documentStatus/status.module';
import { DrivingLicenseModule } from './driving-license/driving-license.module';
import { NicDocModule } from './NIC-doc/nic-doc.module';
import { VehicleImgModule } from './vehicle-image/vehicle-image.module';
import { RevenueLicenseDocModule } from './revenue-license/revenue-license.module';
import { VehicleRegDocModule } from './vehicle-registration/vehicle-registration.module';
import { VehicleInsuranceDocModule } from './vehicle-insurance/vehicle-insurance.module';
import { BillingDocModule } from './billing-documents/billing-documents.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DriversDataModule,
    DriverInfoModule,
    DocumentStatusModule,
    DrivingLicenseModule,
    NicDocModule,
    VehicleImgModule,
    RevenueLicenseDocModule,
    VehicleRegDocModule,
    VehicleInsuranceDocModule,
    BillingDocModule,
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
