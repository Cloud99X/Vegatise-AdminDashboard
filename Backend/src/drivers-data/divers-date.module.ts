import { Module } from '@nestjs/common';
import { DriversDataService } from './divers-date..service';
import { DriversDataController } from './divers-date.controller';

@Module({
  imports: [],
  controllers: [DriversDataController],
  providers: [DriversDataService],
})
export class DriversDataModule {}
