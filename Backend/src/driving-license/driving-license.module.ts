import { Module } from '@nestjs/common';
import { ImageService } from './driving-license.service';
import { ImageController } from './driving-license.controller';

@Module({
  providers: [ImageService],
  controllers: [ImageController],
})
export class DrivingLicenseModule {}
