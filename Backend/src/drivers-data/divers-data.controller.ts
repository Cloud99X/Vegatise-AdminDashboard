import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { DriversDataService } from './divers-data.service';

@Controller('drivers-data')
export class DriversDataController {
  constructor(private readonly service: DriversDataService) {}

  @Get('all-drivers')
  async GetAllDriversData() {
    const data = await this.service.getDriversInfo();
    return data;
  }

  @Get('get-personal-details/:uid')
  async GetPersonalDetails(@Param('uid') uid: string) {
    const data = await this.service.getPersonalInfo(uid);
    return data;
  }

  @Get('get-address-details/:uid')
  async GetAddressRoutesDetails(@Param('uid') uid: string) {
    const data = await this.service.getAddressRoutesInfo(uid);
    return data;
  }

  @Get('get-vehicle-info/:uid')
  async GetVehicleInformation(@Param('uid') uid: string) {
    const data = await this.service.getVehicleInfo(uid);
    return data;
  }

  @Get('get-driving-license-info/:uid')
  async GetDrivingLicenseInformation(@Param('uid') uid: string) {
    const data = await this.service.getDrivingLicenseInfo(uid);
    return data;
  }

  @Get('get-vehicle-image-info/:uid')
  async GetVehicleImageInformation(@Param('uid') uid: string) {
    const data = await this.service.getVehicleImageInfo(uid);
    return data;
  }

  @Get('get-revenue-license-info/:uid')
  async GetRevenueLicenseInformation(@Param('uid') uid: string) {
    const data = await this.service.getRevenueLicenseInfo(uid);
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
