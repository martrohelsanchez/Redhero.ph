import service from 'src/services/Service';
import { User } from 'src/types/User';
import collections from 'src/constants/collections';

export async function createUser(user: User) {
  return await service.create(user, collections.USERS);
}

export async function getUserById(userId: string) {
  return await service.getById<User>(userId, collections.USERS);
}

export async function updateUser(user: Partial<User>, uid: string) {
  return await service.update(user, collections.USERS, uid);
}
