/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config =
{
  apiKey: "AIzaSyAuTrJntXrA0IV3gKpAz2_BhG9cC8t373E",
  authDomain: "friendlychat-e7049.firebaseapp.com",
  projectId: "friendlychat-e7049",
  storageBucket: "friendlychat-e7049.appspot.com",
  messagingSenderId: "896302854425",
  appId: "1:896302854425:web:bdf461725ce1b7ba1bd588",
  measurementId: "G-KKL9H8L0Y2"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}