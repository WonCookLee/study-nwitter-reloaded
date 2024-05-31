import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
