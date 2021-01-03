import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import PrivateRoute from "./PrivateRoute";
import ProvideAuth from "./utils/auth/ProvideAuth";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/Mypage";
import PublicPage from "./pages/PublicPage";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Link to="/">Top</Link>
          <AuthButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
            <li>
              <Link to="/mypage">Mypage Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/mypage">
              <MyPage />
            </PrivateRoute>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
