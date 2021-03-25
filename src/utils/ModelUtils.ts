import firebase from 'firebase';
import { Service } from '../types/Model';

export function modelFromDocument<T extends Service>(doc: firebase.firestore.DocumentData): T {
  const id = doc.id.toString();

  return {
    ...doc.data(),
    id,
  };
}
