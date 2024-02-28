import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { DocumentStatusService } from './status.service';

// Define a type for documentType
type DocumentType =
  | 'AddressAndRoutes'
  | 'BillingDocuments'
  | 'DrivingLicense'
  | 'NIC'
  | 'PersonalInfo'
  | 'RevenueLicense'
  | 'VehicleImage'
  | 'VehicleInfo'
  | 'VehicleInsuarance'
  | 'VehicleRegistration';

type StatusType = 'Pending' | 'In Review' | 'Approved' | 'Rejected';

@Controller('document-status')
export class DocumentStatusController {
  constructor(private readonly service: DocumentStatusService) {}

  @Get('get-document-status/:uid')
  async GetDocumentStatus(@Param('uid') uid: string) {
    const data = await this.service.getDocumentStatus(uid);
    return data;
  }

  @Put('update-status')
  async UpdateDocumentStatus(
    @Body()
    requestBody: {
      uid: string;
      documentType: DocumentType;
      statusType: StatusType;
    },
  ) {
    const { uid, documentType, statusType } = requestBody;
    const data = await this.service.updateDocumentStatus(
      statusType,
      documentType,
      uid,
    );
    return data;
  }
}
