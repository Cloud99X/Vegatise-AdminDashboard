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

  async getPersonalInfo(uid: string) {
    try {
      const docRef = admin
        .firestore()
        .collection('PersonalInfomation')
        .doc(uid);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        console.log('Document not found for UID:', uid);
        //handle the situation as needed
      }
    } catch (error) {
      return { error };
    }
  }

  async getAddressRoutesInfo(uid: string) {
    try {
      const docRef = admin.firestore().collection('AddressAndRoutes').doc(uid);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        console.log('Document not found for UID:', uid);

        //handle the situation as needed
      }
    } catch (error) {
      return { error };
    }
  }

  async getVehicleInfo(uid: string) {
    try {
      const docRef = admin
        .firestore()
        .collection('VehicleInformation')
        .doc(uid);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        console.log('Document not found for UID:', uid);

        //handle the situation as needed
      }
    } catch (error) {
      return { error };
    }
  }

  async getDrivingLicenseInfo(uid: string) {
    try {
      const docRef = admin.firestore().collection('Driving License').doc(uid);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        console.log('Document not found for UID:', uid);

        //handle the situation as needed
      }
    } catch (error) {
      return { error };
    }
  }

  async getVehicleImageInfo(uid: string) {
    try {
      const docRef = admin.firestore().collection('Vehicle Condition').doc(uid);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        console.log('Document not found for UID:', uid);

        //handle the situation as needed
      }
    } catch (error) {
      return { error };
    }
  }

  async getRevenueLicenseInfo(uid: string) {
    try {
      const docRef = admin
        .firestore()
        .collection('Revenue License No')
        .doc(uid);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        console.log('Document not found for UID:', uid);

        //handle the situation as needed
      }
    } catch (error) {
      return { error };
    }
  }

  // async updatePersonalInfo(uid: string, updates: any): Promise<any> {
  //   try {
  //     const docRef = admin
  //       .firestore()
  //       .collection('PersonalInfomation')
  //       .doc(uid);
  //     await docRef.update(updates);
  //     return 'done';
  //   } catch (error) {
  //     console.error('Error updating document:', error);
  //     throw error;
  //   }
  // }
}
