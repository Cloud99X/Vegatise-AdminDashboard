import { Controller, Put, Body, Param, Get } from '@nestjs/common';
import { PersonalDetailsService } from './personal-details.service';


@Controller('drivers-data')
export class DriversDataController {
  constructor(private readonly service: PersonalDetailsService) {}

  @Put('update-personal-info/:uid')
  async updatePersonalInfo(
    @Param('uid') uid: string,
    @Body() updates: any,
  ): Promise<string> {
    return this.service.updatePersonalInfo(uid, updates);
  }

  @Put('update-address-and-routes/:uid')
  async updateAddressAndRoutes(
    @Param('uid') uid: string,
    @Body() updates: any,
  ): Promise<string> {
    return this.service.updateAddressAndRoutes(uid, updates);
  }

  @Put('update-vehicle-information/:uid')
  async updateVehicleInformation(
    @Param('uid') uid: string,
    @Body() updates: any,
  ): Promise<string> {
    return this.service.updateVehicleInfo(uid, updates);
  }



 



  // GET methods

  @Get('get-drivers-info')
  async getDriversInfo(): Promise<any> {
    return this.service.getDriversInfo();
  }

  @Get('get-personal-info/:uid')
  async getPersonalInfo(@Param('uid') uid: string): Promise<any> {
    return this.service.getPersonalInfo(uid);
  }

  @Get('get-address-and-routes/:uid')
  async getAddressAndRoutes(@Param('uid') uid: string): Promise<any> {
    return this.service.getAddressAndRoutes(uid);
  }

  @Get('get-vehicle-information/:uid')
  async getVehicleInformation(@Param('uid') uid: string): Promise<any> {
    return this.service.getVehicleInfo(uid);
  }

  
}