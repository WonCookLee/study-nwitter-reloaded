import { useEffect, useState } from "react";
import { auth } from "../firebase";

const useAuth = () => {
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;
