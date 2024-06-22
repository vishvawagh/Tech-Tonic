require('dotenv').config();
var admin = require("firebase-admin");

if (!admin.apps.length) {
  try {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      project_id: process.env.FIREBASE_PROJECT_ID,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}catch (error) {
  console.alert('Error initializing Firebase Admin SDK:', error);
}
}


module.exports = admin.firestore();
