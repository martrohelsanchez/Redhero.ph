import { firestore } from 'src/firebase';
import * as ModelUtils from 'src/utils/ModelUtils';

export async function create(data: any, collection: string) {
  if (data.id) {
    return await firestore.collection(collection).doc(data.id).set(data);
  } else {
    return await firestore.collection(collection).add(data);
  }
}

export async function getById<T>(id: string, collection: string): Promise<T | undefined> {
  const document = await firestore.collection(collection).doc(id).get();

  if (document.exists) {
    return ModelUtils.modelFromDocument<T>(document) as T;
  }

  return undefined;
}

export async function update(data: any, collection: string, id: string) {
  return await firestore.collection(collection).doc(id).update(data);
}

const defaultExport = {
  create,
  getById,
  update,
};

export default defaultExport;
