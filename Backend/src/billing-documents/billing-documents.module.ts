import { Module } from '@nestjs/common';
import { ImageService } from './billing-documents.service';
import { ImageController } from './billing-documents.controller';

@Module({
  providers: [ImageService],
  controllers: [ImageController],
})
export class BillingDocModule {}
