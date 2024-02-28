import { Body, Controller, Get, Put } from '@nestjs/common';
import { DriversDataService } from './divers-data.service';

@Controller('drivers-data')
export class DriversDataController {
  constructor(private readonly service: DriversDataService) {}

  @Get('all-drivers')
  async GetAllDriversData() {
    const data = await this.service.getDriversInfo();
    return data;
  }

  // @Put()
  // async UpdatePersonalInfo(
  //   @Body()
  //   requestBody: {
  //     uid: string;
  //     updates: any;
  //   },
  // ) {
  //   const { uid, updates } = requestBody;
  //   const data = await this.service.updatePersonalInfo(uid, updates);
  //   return data;
  // }
}
