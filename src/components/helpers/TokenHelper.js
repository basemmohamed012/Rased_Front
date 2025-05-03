import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../../constants/AppConstants';

export function encryptToken(token) {
  // Encrypt using AES
  const encrypted = CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
  
  return encrypted;
}

export function decryptToken(encrypted) {
  if (!encrypted) return null;

  // Decrypt
  const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
  const originalToken = bytes.toString(CryptoJS.enc.Utf8);

  return originalToken;
}