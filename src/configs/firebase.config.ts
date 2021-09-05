import * as firebase from 'firebase/app';
import { getStorage } from 'firebase/storage';
import env from './environment.config';

const app = firebase.initializeApp(env.firebase);

const storage = getStorage(app);

export { storage, firebase as default };
