import React from "react";
import ApiProgress from "../shared/ApiProgress";
import LoginPage from "../pages/LoginPage";
import UserSignupPage from "../pages/UserSignupPage";

function App() {
  return (
    <div className="row">
      <div className="col">
        <ApiProgress path="/api/1.0/users">
          <UserSignupPage>
          </UserSignupPage>
        </ApiProgress>
      </div>
      <div className="col">
        <ApiProgress path="/api/1.0/auth">
          <LoginPage />
        </ApiProgress>
      </div>

    </div>
  );
}

export default App;
