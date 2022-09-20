import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export const Logout = () => {
  const auth = useAuth();

  useEffect(() => {
    auth.logout();
  }, [auth]);

  return <div>ZROB LOGOUT</div>;
};
