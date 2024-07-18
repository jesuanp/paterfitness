import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBtIcCozKZ6iLDlIXhvGJIBXctl8Sz0pMI",
  authDomain: "login-paterfitness.firebaseapp.com",
  projectId: "login-paterfitness",
  storageBucket: "login-paterfitness.appspot.com",
  messagingSenderId: "617678112195",
  appId: "1:617678112195:web:f58af8b9dc33e5c08e2976",
  measurementId: "G-GB4GVZ6V3R"
};

const appFirebase = initializeApp(firebaseConfig);
const auth = initializeAuth(appFirebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { appFirebase, auth, getAuth }