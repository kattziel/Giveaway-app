import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import "../scss/components_scss/Logout.scss";


export const Logout = () => {
  const auth = useAuth();

  useEffect(() => {
    auth.logout();
  }, [auth]);

  return <div className="logout">ZROB LOGOUT</div>;
};
