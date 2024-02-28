import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

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

//
@Injectable()
export class DocumentStatusService {
  // update the doc status
  async updateDocumentStatus(
    statusType: StatusType,
    documentType: DocumentType,
    uid: string,
  ): Promise<string> {
    try {
      const docRef = admin.firestore().collection('DocumentsStatus').doc(uid);
      // Update the specified field based on documentType
      await docRef.update({
        [documentType + '.status']: statusType,
      });

      return 'done';
    } catch (error) {
      return 'error';
    }
  }

  async getDocumentStatus(uid: string): Promise<any> {
    try {
      const docRef = admin.firestore().collection('DocumentsStatus').doc(uid);
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
}
