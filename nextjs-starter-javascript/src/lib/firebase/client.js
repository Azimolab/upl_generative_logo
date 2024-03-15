'use client';

import { initializeApp } from 'firebase/app';

// import { config } from '@/config';

// This executes on the client only, so we can cache the app instance.
let appInstance;

export function getFirebaseApp() {
  if (appInstance) {
    return appInstance;
  }
  appInstance = initializeApp({
    apiKey: "AIzaSyBv6ndp4dK1HJAfQdFipc_7ZKKtpWqxacI",
    authDomain: "upl-logo-gen.firebaseapp.com",
    projectId: "upl-logo-gen",
    storageBucket: "upl-logo-gen.appspot.com",
    messagingSenderId: "38335007277",
    appId: "1:38335007277:web:7b2fcdd3e59c8f39b306a4",
    measurementId: "G-1KF6GS4D8H"
   
    // apiKey: config.firebase.apiKey,
    // authDomain: config.firebase.authDomain,
    // projectId: config.firebase.projectId,
    // storageBucket: config.firebase.storageBucket,
    // messagingSenderId: config.firebase.messagingSenderId,
    // appId: config.firebase.appId,
  });
  console.log('appInstance: ', appInstance.options.appId);


  return appInstance;
}
