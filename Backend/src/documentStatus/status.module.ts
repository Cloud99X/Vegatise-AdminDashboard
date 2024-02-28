import { Module } from '@nestjs/common';

import { DocumentStatusService } from './status.service';
import { DocumentStatusController } from './status.controller';

@Module({
  imports: [],
  controllers: [DocumentStatusController],
  providers: [DocumentStatusService],
})
export class DocumentStatusModule {}
