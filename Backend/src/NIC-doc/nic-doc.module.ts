import { Module } from '@nestjs/common';
import { ImageService } from './nic-doc.service';
import { ImageController } from './nic-doc.controller';

@Module({
  providers: [ImageService],
  controllers: [ImageController],
})
export class NicDocModule {}
