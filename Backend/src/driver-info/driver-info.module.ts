import { Module } from '@nestjs/common';
import { ImageService } from './driver-info.service';
import { ImageController } from './driver-info.controller';

@Module({
  providers: [ImageService],
  controllers: [ImageController],
})
export class DriverInfoModule {}
