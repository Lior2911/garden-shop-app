
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAdJ0pnJpBsXDLq0GDlinwPOg-EnwqarXk",
  authDomain: "my-garden-shop.firebaseapp.com",
  projectId: "my-garden-shop",
  storageBucket: "my-garden-shop.appspot.com",
  messagingSenderId: "910955244239",
  appId: "1:910955244239:web:f0313183b93f8ec5a025ba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;