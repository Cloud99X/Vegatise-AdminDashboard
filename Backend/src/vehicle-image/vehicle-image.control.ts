import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  Body,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ImageService } from './vehicle-image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';

@Controller('vehicle-image')
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

  @Get('side-view')
  async getSideViewImageUrl(@Query('uid') uid: string): Promise<string> {
    return this.imageService.getImageUrl(uid, 'side_view.jpg', 'Side View');
  }

  @Post('upload-front-view')
  @UseInterceptors(FileInterceptor('photo'))
  async uploadFrontView(
    @UploadedFile() file: Multer.File,
    @Body('uid') uid: string,
  ) {
    try {
      if (file && uid) {
        const imagePath = `${uid}/Vehicle Image/Front View/front_view.jpg`;
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
        const imagePath = `${uid}/Vehicle Image/Back View/back_view.jpg`;
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

  @Post('upload-side-view')
  @UseInterceptors(FileInterceptor('photo'))
  async uploadSideView(
    @UploadedFile() file: Multer.File,
    @Body('uid') uid: string,
  ) {
    try {
      if (file && uid) {
        const imagePath = `${uid}/Vehicle Image/Side View/side_view.jpg`;
        const saveImage = await this.imageService.uploadFile(
          file.buffer,
          imagePath,
          file.mimetype,
        );

        if (saveImage === 'done') {
          return { message: 'side view image uploaded successfully.' };
        }
      } else {
        console.error('Please provide all data.');
      }
    } catch (error) {
      console.error('Error uploading back view image:', error);
    }
  }
}
