import { Module } from '@nestjs/common';
import { PersonalDetailsService } from './personal-details.service';
import { PersonalDetailsController } from './personal-details.controllers';
import { DocumentStatusService } from 'src/documentStatus/status.service';

@Module({
  imports: [],
  controllers: [PersonalDetailsController],
  providers: [PersonalDetailsService, DocumentStatusService],
})
export class PersonalDetailsModule {}
