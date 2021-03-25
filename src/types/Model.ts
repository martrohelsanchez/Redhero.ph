import firebase from 'firebase';

export type Document = firebase.firestore.DocumentData;

export type Service = { document?: Document };
