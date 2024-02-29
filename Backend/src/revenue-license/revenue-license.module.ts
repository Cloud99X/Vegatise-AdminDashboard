import { Module } from '@nestjs/common';
import { ImageService } from './revenue-license.service';
import { ImageController } from './revenue-license.controller';

@Module({
  providers: [ImageService],
  controllers: [ImageController],
})
export class RevenueLicenseDocModule {}
