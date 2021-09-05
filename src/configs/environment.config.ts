import { getEnvString } from 'utils/environment.util';
import firebase from 'configs/firebase.config';

const env = {
  firebase: {
    apiKey: getEnvString('REACT_APP_FIREBASE_API_KEY'),
    authDomain: getEnvString('REACT_APP_FIREBASE_AUTH_DOMAIN'),
    projectId: getEnvString('REACT_APP_FIREBASE_PROJECT_ID'),
    storageBucket: getEnvString('REACT_APP_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: getEnvString('REACT_APP_FIREBASE_MESSAGING_SENDER_ID'),
    appId: getEnvString('REACT_APP_FIREBASE_APP_ID'),
    measurementId: getEnvString('REACT_APP_FIREBASE_MEASUREMENT_ID'),
  } as firebase.FirebaseOptions,
};

export default env;
