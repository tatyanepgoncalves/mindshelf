import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAUnlT32e0JInwwgzIwNPEvgc1fHPEfQPo',
  authDomain: 'mindshelf-9f62c.firebaseapp.com',
  projectId: 'mindshelf-9f62c',
  storageBucket: 'mindshelf-9f62c.firebasestorage.app',
  messagingSenderId: '541675960490',
  appId: '1:541675960490:web:f3bb0bec6e8b82ce9538d3',
  measurementId: 'G-WRMSM880BK',
}

const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
