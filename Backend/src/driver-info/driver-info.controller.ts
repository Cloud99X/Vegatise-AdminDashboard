import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  Body,
  UploadedFile,
} from '@nestjs/common';
import { ImageService } from './driver-info.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get('url')
  async getImageUrl(): Promise<string> {
    return this.imageService.getImageUrl('cpdmZYnZfOU2uGXVQeEPmphqmIj1');
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  async uploadFile(
    @UploadedFile() file: Multer.File,
    @Body('uid') uid: string,
  ) {
    try {
      if (file && uid) {
        const imagePath = `${uid}/Profile Picture/ProfilePicture.jpg`;
        const saveImage = await this.imageService.uploadFile(
          file.buffer,
          imagePath,
          file.mimetype,
        );

        if (saveImage === 'done') {
          return { message: 'File uploaded successfully.' };
        }
      } else {
        console.error('Please provide all data.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }
}

// import { Controller, Get } from '@nestjs/common';
// import { ImageService } from './driver-info.service';

// @Controller('images')
// export class ImageController {
//   constructor(private readonly imageService: ImageService) {}

//   @Get('url')
//   async getImageUrl(): Promise<string> {
//     return this.imageService.fetchImageUrl();
//   }
// }
