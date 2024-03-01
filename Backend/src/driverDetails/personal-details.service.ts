import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class PersonalDetailsService {
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
      const docRef = admin.firestore().collection('PersonalInformation').doc(uid);
      await docRef.set({
        name,
        dateOfBirth,
        email,
        nationalIdNumber,
        gender,
        phone,
      });
      return 'Personal details saved successfully';
    } catch (error) {
      console.error('Error saving personal details:', error);
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