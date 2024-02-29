import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  Body,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ImageService } from './nic-doc.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';

@Controller('nic')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get('front-view')
  async getFrontViewImageUrl(@Query('uid') uid: string): Promise<string> {
    return this.imageService.getImageUrl(uid, 'front_view.jpg', 'Front View');
  }

  @Get('back-view')
  async getBackViewImageUrl(@Query('uid') uid: string): Promise<string> {
    return this.imageService.getImageUrl(uid, 'back_view.jpg', 'Back View');
  }

  @Post('upload-front-view')
  @UseInterceptors(FileInterceptor('photo'))
  async uploadFrontView(
    @UploadedFile() file: Multer.File,
    @Body('uid') uid: string,
  ) {
    try {
      if (file && uid) {
        const imagePath = `${uid}/NIC Information/Front View/front_view.jpg`;
        const saveImage = await this.imageService.uploadFile(
          file.buffer,
          imagePath,
          file.mimetype,
        );

        if (saveImage === 'done') {
          return { message: 'Front view image uploaded successfully.' };
        }
      } else {
        console.error('Please provide all data.');
      }
    } catch (error) {
      console.error('Error uploading front view image:', error);
    }
  }

  @Post('upload-back-view')
  @UseInterceptors(FileInterceptor('photo'))
  async uploadBackView(
    @UploadedFile() file: Multer.File,
    @Body('uid') uid: string,
  ) {
    try {
      if (file && uid) {
        const imagePath = `${uid}/NIC Information/Back View/back_view.jpg`;
        const saveImage = await this.imageService.uploadFile(
          file.buffer,
          imagePath,
          file.mimetype,
        );

        if (saveImage === 'done') {
          return { message: 'Back view image uploaded successfully.' };
        }
      } else {
        console.error('Please provide all data.');
      }
    } catch (error) {
      console.error('Error uploading back view image:', error);
    }
  }
}
