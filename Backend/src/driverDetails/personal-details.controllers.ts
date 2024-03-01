import {
  Controller,
  Body,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PersonalDetailsService } from './personal-details.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentStatusService } from 'src/documentStatus/status.service';
//import { Multer } from 'express';

@Controller('personal-details')
export class PersonalDetailsController {
  constructor(
    private readonly service: PersonalDetailsService,
    private readonly docService: DocumentStatusService,
  ) {}

  // save personal information
  @Post('save-personal-details')
  async calculateDistance(
    @Body()
    requestBody: {
      uid: string;
      name: string;
      email: string;
      gender: string;
      dob: string;
      mobileNumber: string;
      nationalIdNumber: string;
    },
  ): Promise<{ result: string }> {
    const { uid, name, email, gender, dob, mobileNumber, nationalIdNumber } = requestBody;
    const result = await this.service.savePersonalDetails(
      uid,
      name,
      email,
      gender,
      dob,
      nationalIdNumber,
      mobileNumber,
    );
    const result1 = await this.docService.updateDocumentStatus(
      'In Review',
      'PersonalInfo',
      uid,
    );

    console.log(result1);
    return { result };
  }

  @Put('update-email')
  async updateEmail(
    @Body()
    requestBody: {
      uid: string;
      newEmail: string;
    },
  ): Promise<{ result: string }> {
    const { uid, newEmail } = requestBody;
    const result = await this.service.updateEmail(uid, newEmail);
    return { result };
  }

  //update authentication phone number
  @Put('update-phone-number')
  async updatePhoneNumber(
    @Body()
    requestBody: {
      uid: string;
      phoneNumber: string;
    },
  ): Promise<{ result: string }> {
    const { uid, phoneNumber } = requestBody;
    const result = await this.service.updatePhoneNumber(uid, phoneNumber);
    return { result };
  }

  //update password
  @Put('update-password')
  async updatePassword(
    @Body()
    requestBody: {
      uid: string;
      newPassword: string;
    },
  ): Promise<{ result: string }> {
    const { uid, newPassword } = requestBody;
    const result = await this.service.updatePassword(uid, newPassword);
    return { result };
  }

  // @Post('save-profile-picture')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body('uid') uid: string,
  // ) {
  //   try {
  //     if (file && uid) {
  //       const { buffer, originalname, mimetype } = file;
  //       const downloadUrl = await this.service.saveProfilePhoto(
  //         uid,
  //         buffer,
  //         originalname,
  //         mimetype,
  //       );
  //       return { downloadUrl };
  //     } else {
  //       console.error('No file provided');
  //     }
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  // }
}
