import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../utils/auth/ProvideAuth";

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    auth.signin(email.value, password.value, () => {
      history.replace(from);
    });
  };

  return (
    <div>
      <h1>Log in</h1>
      {auth.message && <div>{auth.message}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <br />
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
