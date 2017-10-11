import { initializeApp } from 'firebase';
import { addVoteSuccess } from './actions/items';

import config from '../config';

const firebaseApp = initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
  storageBucket: config.STORAGE_BUCKET
});

export const votesRef = firebaseApp.database().ref('votes');

export function syncFirebase(store) {
  votesRef.on('child_added', (snapshot) => {
    store.dispatch(addVoteSuccess(snapshot.val()))
  });
}
