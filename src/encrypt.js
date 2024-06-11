import CryptoJS from 'crypto-js';


export const generateUniqueKey = (userId1, userId2) => {
const combinedIds = userId1 < userId2 ? `${userId1}-${userId2}` : `${userId2}-${userId1}`;
return CryptoJS.SHA256(combinedIds).toString();
}; 

export const encryptMessage = (message, key) => {
  const SECRET_KEY = 'your-secret-key'; 
  const salt = CryptoJS.lib.WordArray.random(128 / 8); 
  const encrypted = CryptoJS.AES.encrypt(message, SECRET_KEY, { iv: salt }).toString(); 
  return {
    cipherText: encrypted,
    salt: salt.toString(CryptoJS.enc.Base64), 
  };
};

export const decryptMessage = (encryptedMessage) => {
  if (!encryptedMessage || !encryptedMessage.cipherText || !encryptedMessage.salt) {

    return '';
  }
  const SECRET_KEY = 'your-secret-key'; 
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage.cipherText, SECRET_KEY, { iv: CryptoJS.enc.Base64.parse(encryptedMessage.salt) });
  const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedMessage;
};
