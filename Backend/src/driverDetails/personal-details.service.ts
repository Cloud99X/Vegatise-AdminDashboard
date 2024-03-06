import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { DocumentStatusService } from 'src/documentStatus/status.service';
@Injectable()
export class PersonalDetailsService {
  constructor(private readonly documentStatusService: DocumentStatusService) {}

  // GET methods

  async getDriversInfo(): Promise<any[]> {
    try {
      const collectionRef = admin.firestore().collection('PersonalInfomation');
      const snapshot = await collectionRef.get();
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Add ID to each document
    } catch (error) {
      console.error('Error retrieving driver information:', error);
      throw error; // Re-throw for handling in frontend
    }
  }

  async getPersonalInfo(uid: string): Promise<any> {
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
        // Handle the situation as needed (e.g., return an empty object or error)
      }
    } catch (error) {
      console.error('Error retrieving personal information:', error);
      throw error; // Re-throw for handling in frontend
    }
  }

  async getAddressAndRoutes(uid: string): Promise<any> {
    try {
      const docRef = admin.firestore().collection('AddressAndRoutes').doc(uid);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        console.log('Document not found for UID:', uid);
        // Handle the situation as needed (e.g., return an empty object or error)
      }
    } catch (error) {
      console.error('Error retrieving address and routes:', error);
      throw error; // Re-throw for handling in frontend
    }
  }

  async getVehicleInfo(uid: string): Promise<any> {
    try {
      const docRef = admin.firestore().collection('VehicleInformation').doc(uid);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        console.log('Document not found for UID:', uid);
        // Handle the situation as needed (e.g., return an empty object or error)
      }
    } catch (error) {
      console.error('Error retrieving vehicle information:', error);
      throw error; // Re-throw for handling in frontend
    }
  }


  // UPDATE methods

  async updatePersonalInfo(uid: string, updates: any): Promise<string> {
    try {
      const docRef = admin
        .firestore()
        .collection('PersonalInfomation')
        .doc(uid);
      await docRef.update(updates);



      return 'done';
    } catch (error) {
      console.error('Error updating personal info:', error);
      throw error; // Re-throw for handling in frontend
    }
  }

  async updateAddressAndRoutes(uid: string, updates: any): Promise<string> {
    try {
      const docRef = admin
        .firestore()
        .collection('AddressAndRoutes')
        .doc(uid);
      await docRef.update(updates);

      

      return 'done';
    } catch (error) {
      console.error('Error updating address and routes:', error);
      throw error; // Re-throw for handling in frontend
    }
  }

  async updateVehicleInfo(uid: string, updates: any): Promise<string> {
    try {
      const docRef = admin.firestore().collection('VehicleInformation').doc(uid);
      await docRef.update(updates);

     

      return 'done';
    } catch (error) {
      console.error('Error updating vehicle info:', error);
      throw error; // Re-throw for handling in frontend
    }
  }
}
