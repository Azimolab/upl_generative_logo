'use client';

import { app } from '@/lib/firebase/client';
import { getFirestore } from "firebase/firestore";

// import { getFirestore, doc, setDoc, addDoc, collection, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


export function getFirebaseAuth() {
  return getAuth(app);
}

// new
export const db = getFirestore(app)

// const newDay = doc(db, 'diaespecial/20-03-2024');
// // const childNewDay = doc(newDay, 'totalDeAlgumaCoisa/algumaOutraCoisa');

// async function escreverNewDay() {
//   const docData = {
//     descricao: 'OlaAlgmacOisa',
//     tamanho: 1.45,
//     umBool: true
//   };
//   try {
//     await setDoc(newDay, docData, { merge: true });
//     console.log("Tudo certo ate aqui.");
//   } catch (error) {
//     console.error(`Temos um erro: ${error}`);
//   }
// };

// escreverNewDay() 

// const otherCoisa = collection(db, 'seilaoque')

// async function novaColecao() {
//   const meuDeusdoCeus = await addDoc(otherCoisa, {
//     costumer: 'Eduardo',
//     valorBool: true
//   });

//   console.log(`O documento foi criado ${meuDeusdoCeus.path}`)
// }

// novaColecao();

// async function readASingleDocument() {
//   const mySnapShot = await getDoc(newDay);
//   if(mySnapShot.exists()){
//     const docData = mySnapShot.data();
//     console.log(`Minha data é ${JSON.stringify(docData)}`);
//   }
// }

// readASingleDocument()