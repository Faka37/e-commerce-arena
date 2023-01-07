import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIPXtg02aNWBRybyqijcawNY7pLJp1D1k",
    authDomain: "e-commerce-arena.firebaseapp.com",
    projectId: "e-commerce-arena",
    storageBucket: "e-commerce-arena.appspot.com",
    messagingSenderId: "372104563833",
    appId: "1:372104563833:web:5d8371c05f103a6e9698a8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


