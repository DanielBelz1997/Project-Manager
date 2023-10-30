import { useState } from "react";
import image from "./5087579.png";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const [submittedData, setSubmittedData] = useState(null);

  // const navigate = useNavigate();

  const onBottonClick = () => {
    setUsernameError("");
    setPasswordError("");

    if ("" === username) {
      setUsernameError("Please provide your username");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 5) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
  };

  return (
    <>
      {/* <img src={image} alt="Chat" /> */}
      <div className="container">
        <div className="imageLogin">
          {/* <div className="image"> */}
          <img src={image} alt="Chat" />
          {/* </div> */}
        </div>
        <div className={"mainContainer"}>
          <div className={"titleContainer"}>
            <div>Login</div>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={username}
              placeholder="username"
              onChange={(ev) => setUsername(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{usernameError}</label>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="password"
              onChange={(ev) => setPassword(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{passwordError}</label>
            <span
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer", alignSelf: "center" }}
            >
              {showPassword ? "👁️" : "👁️"}
            </span>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              className={"inputBotton"}
              type="button"
              onClick={onBottonClick}
              value={"Login"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
