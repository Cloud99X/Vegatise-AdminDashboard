import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class PersonalDetailsService {
  async fetchUid(uidObject: { uid: string }): Promise<string> {
    const { uid } = uidObject;
    return uid;
  }
  async savePersonalDetails(
    uid: string,
    name: string,
    dateOfBirth: string,
    email: string,
    nationalIdNumber: string,
    gender: string,
    phone: string,
  ): Promise<string> {
    try {
      if (!uid) {
        throw new Error('UID is missing');
      }
      const existingDetails = await this.getPersonalDetails(uid);

      const updatedDetails = {
        name: name || existingDetails.name,
        dateOfBirth: dateOfBirth || existingDetails.dateOfBirth,
        email: email || existingDetails.email,
        nationalIdNumber: nationalIdNumber || existingDetails.nationalIdNumber,
        gender: gender || existingDetails.gender,
        phone: phone || existingDetails.phone,
      };

      const docRef = admin.firestore().collection('PersonalInformation').doc(uid);
      // await docRef.set({name, dateOfBirth, email, nationalIdNumber, gender, phone});
      await docRef.set(updatedDetails);
      return 'Personal details saved successfully';

    } catch (error) {
      console.error('Error saving personal details:', error);
      throw error;
    }
  }

  private async getPersonalDetails(uid: string): Promise<any> {
    try {
      const docRef = admin.firestore().collection('PersonalInformation').doc(uid);
      const snapshot = await docRef.get();
      if (snapshot.exists) {
        return snapshot.data();
      } else {
        // Return an empty object if personal details don't exist yet
        return {};
      }
    } catch (error) {
      console.error('Error fetching personal details:', error);
      throw error;
    }
  }

  async updateEmail(uid: string, newEmail: string): Promise<string> {
    try {
      // Implementation
      return 'Email updated successfully';
    } catch (error) {
      console.error('Error updating email:', error);
      throw error;
    }
  }

  async updatePhoneNumber(uid: string, phoneNumber: string): Promise<string> {
    try {
      // Implementation
      return 'Phone number updated successfully';
    } catch (error) {
      console.error('Error updating phone number:', error);
      throw error;
    }
  }

  async updatePassword(uid: string, newPassword: string): Promise<string> {
    try {
      // Implementation
      return 'Password updated successfully';
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  }

  async saveProfilePhoto(uid: string, buffer: Buffer, originalname: string, mimetype: string): Promise<string> {
    try {
      // Implementation
      return 'Profile photo saved successfully';
    } catch (error) {
      console.error('Error saving profile photo:', error);
      throw error;
    }
  }
}