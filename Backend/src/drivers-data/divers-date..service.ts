import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class DriversDataService {
  async getDriversInfo(): Promise<any> {
    try {
      const collectionRef = admin.firestore().collection('PersonalInfomation');
      const snapshot = await collectionRef.get();
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Add ID to each document
    } catch (error) {
      return { error };
    }
  }
}
