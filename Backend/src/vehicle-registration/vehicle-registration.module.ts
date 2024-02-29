import { Module } from '@nestjs/common';
import { ImageService } from './vehicle-registration.service';
import { ImageController } from './vehicle-registration.controller';

@Module({
  providers: [ImageService],
  controllers: [ImageController],
})
export class VehicleRegDocModule {}
