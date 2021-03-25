import { useState, useEffect } from 'react';

import { auth } from 'src/firebase';
import { User } from 'src/types/User';
import * as userService from 'src/services/UserService';

function useAuth() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  async function getUser(userInfo: User) {
    let queriedUser = await userService.getUserById(userInfo.id ?? '');

    if (queriedUser) {
      setUser({
        id: queriedUser.id,
        bloodType: queriedUser.bloodType,
        displayName: queriedUser.displayName,
        email: queriedUser.email,
        phoneNumber: queriedUser.phoneNumber,
        photoURL: queriedUser.photoURL,
      });
    } else {
      await userService.createUser({
        id: userInfo.id,
        displayName: userInfo.displayName,
        email: userInfo.email,
        photoURL: userInfo.photoURL,
        isDonor: false,
      });
    }

    setIsLoading(false);
  }

  useEffect(() => {
    const authStateChange = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const userInfo = {
          id: userAuth.uid,
          displayName: userAuth.displayName,
          email: userAuth.email,
          photoURL: userAuth.photoURL,
        };

        setUser(userInfo);

        getUser(userInfo);
      } else {
        setUser(null);
        setError(new Error('Unauthenticated'));
      }

      setIsLoading(false);
    });
    return () => {
      authStateChange();
    };
  }, []);

  return {
    error,
    isLoading,
    user,
  };
}

export default useAuth;
