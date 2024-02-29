import { Module } from '@nestjs/common';
import { ImageService } from './vehicle-insurance.service';
import { ImageController } from './vehicle-insurance.controller';

@Module({
  providers: [ImageService],
  controllers: [ImageController],
})
export class VehicleInsuranceDocModule {}
