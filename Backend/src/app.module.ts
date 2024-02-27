import { Module } from '@nestjs/common';
import { DriversDataModule } from './drivers-data/divers-date.module';

@Module({
  imports: [DriversDataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
