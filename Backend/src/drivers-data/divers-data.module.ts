import { Module } from '@nestjs/common';
import { DriversDataService } from './divers-data.service';
import { DriversDataController } from './divers-data.controller';

@Module({
  imports: [],
  controllers: [DriversDataController],
  providers: [DriversDataService],
})
export class DriversDataModule {}
