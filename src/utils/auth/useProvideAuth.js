import { useState } from "react";
import { apiAuth } from "./apiAuth";

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  const signin = (email, password, cb) => {
    setMessage(null);
    return apiAuth.signin(email, password, () => {
      apiAuth.isAuthenticated && setUser(true);
      apiAuth.isAuthenticated || setMessage("ログイン情報に誤りがあります");
      cb();
    });
  };

  const signout = (cb) => {
    setMessage(null);
    return apiAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    message,
    signin,
    signout,
  };
}

export default useProvideAuth;
