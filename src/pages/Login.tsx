import styled from "@emotion/styled";
import Header from "../component/header";
import { Button, OutlinedInput, IconButton } from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

  .header-line {
    width: 100%;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #47536b;
    color: white;
    padding: 20px;
    box-sizing: border-box;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 300px;
    padding: 20px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    color: #333;
  }

  .input-field {
    display: flex;
    align-items: center;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }

  .signup-link {
    margin-top: 16px;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log("Login attempted with", { email, password });
  };

  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>

      <div className="main-container">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <OutlinedInput
            className="input-field"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <OutlinedInput
            className="input-field"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            endAdornment={
              <IconButton onClick={handleTogglePassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
          />
          <div className="action-buttons">
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => console.log("Signup clicked")}
            >
              Sign Up
            </Button>
          </div>
        </form>
        <div
          className="signup-link"
          onClick={() => console.log("Navigate to signup")}
        >
          New user? Click here to sign up.
        </div>
      </div>
    </Style>
  );
};

export default Login;
