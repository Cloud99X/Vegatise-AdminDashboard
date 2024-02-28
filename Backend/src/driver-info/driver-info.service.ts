import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class ImageService {
  async getImageUrl(uid: string): Promise<string> {
    try {
      const bucket = admin.storage().bucket('gs://vegatise-1bad9.appspot.com');

      const imagePath = `${uid}/Profile Picture/helmet.jpg`;
      // const imagePath =
      //   'cpdmZYnZfOU2uGXVQeEPmphqmIj1/Profile Picture/helmet.jpg';

      const [url] = await bucket.file(imagePath).getSignedUrl({
        action: 'read',
        expires: Date.now() + 60 * 60 * 1000, // 1 hour
      });

      return url;
    } catch (error) {
      console.error('Error getting image URL:', error);
      throw new Error('Failed to retrieve image URL');
    }
  }

  async uploadFile(
    fileBuffer: Buffer,
    filePath: string,
    mimetype: string,
  ): Promise<string> {
    const bucket = admin.storage().bucket('gs://vegatise-1bad9.appspot.com');
    const file = bucket.file(filePath);

    try {
      await file.save(fileBuffer, {
        metadata: {
          contentType: mimetype,
        },
      });

      return 'done';
    } catch (error) {
      return 'error';
    }
  }
}

// async uploadImage(file: Express.Multer.File): Promise<string> {
//   const storage = admin.storage();
//   const bucket = storage.bucket();

//   const fileName = `images/${Date.now()}_${file.originalname}`;
//   const fileUpload = bucket.file(fileName);

//   await fileUpload.save(file.buffer, {
//     metadata: {
//       contentType: file.mimetype,
//     },
//   });

//   return fileName;
//}
