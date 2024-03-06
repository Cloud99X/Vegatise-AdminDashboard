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
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); 
    } catch (error) {
      console.error('Error retrieving driver information:', error);
      throw error; 
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
      }
    } catch (error) {
      console.error('Error retrieving personal information:', error);
      throw error; 
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
        
      }
    } catch (error) {
      console.error('Error retrieving address and routes:', error);
      throw error;
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
        
      }
    } catch (error) {
      console.error('Error retrieving vehicle information:', error);
      throw error; 
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
      throw error; 
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
      throw error; 
    }
  }

  async updateVehicleInfo(uid: string, updates: any): Promise<string> {
    try {
      const docRef = admin.firestore().collection('VehicleInformation').doc(uid);
      await docRef.update(updates);

     

      return 'done';
    } catch (error) {
      console.error('Error updating vehicle info:', error);
      throw error; 
    }
  }
}
