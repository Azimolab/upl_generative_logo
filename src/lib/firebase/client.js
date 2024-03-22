'use client';

import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyBv6ndp4dK1HJAfQdFipc_7ZKKtpWqxacI",
    authDomain: "upl-logo-gen.firebaseapp.com",
    projectId: "upl-logo-gen",
    storageBucket: "upl-logo-gen.appspot.com",
    messagingSenderId: "38335007277",
    appId: "1:38335007277:web:7b2fcdd3e59c8f39b306a4",
    measurementId: "G-1KF6GS4D8H"
}

export const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)


// import { config } from '@/config';

// // This executes on the client only, so we can cache the app instance.
// let appInstance;

// export function getFirebaseApp() {
//   if (appInstance) {
//       console.log("ID no escopo: ", config.appId)
//     return appInstance;
//   }
//   appInstance = initializeApp({
//     apiKey: "AIzaSyBv6ndp4dK1HJAfQdFipc_7ZKKtpWqxacI",
//     authDomain: "upl-logo-gen.firebaseapp.com",
//     projectId: "upl-logo-gen",
//     storageBucket: "upl-logo-gen.appspot.com",
//     messagingSenderId: "38335007277",
//     appId: "1:38335007277:web:7b2fcdd3e59c8f39b306a4",
//     measurementId: "G-1KF6GS4D8H"
    
//     // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     // authDomain: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     // projectId: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     // appId: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    
//     // apiKey: config.firebase.apiKey,
//     // authDomain: config.firebase.authDomain,
//     // projectId: config.firebase.projectId,
//     // storageBucket: config.firebase.storageBucket,
//     // messagingSenderId: config.firebase.messagingSenderId,
//     // appId: config.firebase.appId,
//   });
//   console.log("ID fora do escopo: ", appInstance.apiKey)
  

//   return appInstance;
// }

// console.log('appInstance',appInstance)
// console.log('config',config.firebase)
// console.log('version', process.env.NEXT_PUBLIC_SITE_VERSION)