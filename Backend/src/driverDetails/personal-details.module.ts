import { Module } from '@nestjs/common';
import { PersonalDetailsService } from './personal-details.service';
import { DriversDataController } from './personal-details.controllers';
import { DocumentStatusService } from 'src/documentStatus/status.service';

@Module({
  imports: [],
  controllers: [DriversDataController],
  providers: [PersonalDetailsService, DocumentStatusService],
})
export class PersonalDetailsModule {}