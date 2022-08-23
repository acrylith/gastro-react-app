import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

export const fbConfig = {
apiKey: "AIzaSyBXUpxUxsCAupnOyejZI02he1gPefbIOZY",
  authDomain: "gastro-react-app.firebaseapp.com",
  databaseURL: "https://gastro-react-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gastro-react-app",
  storageBucket: "gastro-react-app.appspot.com",
  messagingSenderId: "1031885380394",
  appId: "1:1031885380394:web:c9841843bb688429905c53",
  measurementId: "G-7JHK48FEM3"
}

export const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

export const base = firebase.initializeApp(fbConfig)
export const fstore = getFirestore(base)