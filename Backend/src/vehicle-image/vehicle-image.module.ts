import { Module } from '@nestjs/common';
import { ImageService } from './vehicle-image.service';
import { ImageController } from './vehicle-image.control';

@Module({
  providers: [ImageService],
  controllers: [ImageController],
})
export class VehicleImgModule {}
