import styled from "@emotion/styled";
import Header from "../component/header";
import { Button, OutlinedInput, IconButton } from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Tabs, Tab } from "@mui/material"; // MUI 탭 컴포넌트 추가
import Theme from "../styles/Theme";

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
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${Theme.mainThemeColor};
    box-sizing: border-box;
  }

  .login-tab {
  }

  .login-form {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    gap: 1em;
    width: 35%;
  }

  .input-field {
    display: flex;
    align-items: center;
  }

  .login-button {
    display: flex;
    width: 100%;
  }

  .signup-link {
    margin-top: 16px;
    font-size: 14px;
    color: ${Theme.defaultColor};
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Login = () => {
  const [tabIndex, setTabIndex] = useState(0); // 탭 상태

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const [user_password, user_setPassword] = useState("");
  const [ssc_password, ssc_setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {};

  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>

      <div className="main-container">
        {/* 로그인 옵션 탭 */}
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="일반 사용자 " />
          <Tab label="동아리 사용자" />
        </Tabs>

        {/* 로그인 폼 */}
        <form className="login-form">
          {tabIndex === 0 && (
            <>
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
                value={user_password}
                onChange={(e) => user_setPassword(e.target.value)}
                fullWidth
                endAdornment={
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                }
              />
            </>
          )}

          {tabIndex === 1 && (
            <>
              <OutlinedInput
                className="input-field"
                placeholder="SCC ID"
                type="id"
                value={id}
                onChange={(e) => setID(e.target.value)}
                fullWidth
              />
              <OutlinedInput
                className="input-field"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={ssc_password}
                onChange={(e) => ssc_setPassword(e.target.value)}
                fullWidth
                endAdornment={
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                }
              />
            </>
          )}

          <div className="login-button">
            <Button
              variant="contained"
              sx={{ width: "100%", height: "50px", fontSize: "1.5em", background: Theme.whiteColor, color: Theme.defaultColor }}
              onClick={handleLogin}
            >
              Login
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
