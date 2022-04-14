import React from "react";
import LoginPage from "../pages/LoginPage";
import UserSignupPage from "../pages/UserSignupPage";

function App() {
  return (
    <div className="row">
      <div className="col">
          <UserSignupPage />
      </div>
      <div className="col">
          <LoginPage />
      </div>

    </div>
  );
}

export default App;
