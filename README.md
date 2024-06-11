# Chat Application with React and Firebase

**Overview:**

A real-time chat application built with React for the frontend and Firebase for the backend. This project is developed as part of a college course on Network Security and Cryptography. It includes user authentication, AES encryption for secure messaging, and real-time message synchronization.

**Features:**

1) Real-time Messaging: Instant message delivery and updates.
2) User Authentication: Supports email/password and social logins (Google, Facebook).
3) Secure Communication: AES encryption ensures message confidentiality.
4) Responsive Design: Optimized for various device sizes.

**Technologies Used:**

_**Frontend Development**_

1) React: A popular JavaScript library for building user interfaces.
2) React Components: Used for creating chat windows, message input fields, and authentication forms.
3) Firebase Authentication: Integrated for user authentication via email/password and social login methods.
4) Encryption with AES
5) AES (Advanced Encryption Standard): Secures message content.
6) CryptoJS Library: Used for AES encryption and decryption.

_**Key Generation:**_

1) SHA-256: Hashing algorithm used to generate unique encryption keys based on user IDs.
2) Unique Keys: Generated for each conversation to ensure confidentiality.

_**Message Encryption and Decryption:**_

1) encryptMessage Function: Encrypts plaintext messages with AES.
2) decryptMessage Function: Decrypts ciphertext to retrieve original plaintext messages.
3) Random Salt: Added for extra security in encryption.

_**Backend Integration with Firebase:**_

1) Firebase Cloud Firestore: Used for storing and retrieving messages in real-time.
2) Firestore Collections: Messages stored as documents with attributes like sender ID, recipient ID, message content, and timestamp.

_**Real-time Communication:**_

Firestore Real-time Updates: Enables instant delivery and synchronization of messages between users.
Getting Started

**Prerequisites:**
1) Node.js
2) Firebase account


