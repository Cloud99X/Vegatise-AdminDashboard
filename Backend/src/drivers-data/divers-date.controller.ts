import { Controller, Get } from '@nestjs/common';
import { DriversDataService } from './divers-date..service';

@Controller('drivers-data')
export class DriversDataController {
  constructor(private readonly service: DriversDataService) {}

  @Get('all-drivers')
  async GetAllDriversData() {
    const data = await this.service.getDriversInfo();
    return data;
  }
}
