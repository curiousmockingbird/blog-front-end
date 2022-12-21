import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [userIsLoading, setUserIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), user => {
      setUser(user);
      setUserIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return { user, userIsLoading };
}
export default useUser;