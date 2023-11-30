import { useState } from "react";
import image from "./5087579.jpg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

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

    handleLogin();
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:3302/api/users/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.status === 200) {
        navigate("/");
      } else if (response.status === 500) {
        {
          toast.success("Server error. please comeback later.");
        }
      } else if (response.status === 401) {
        {
          toast.error(
            "The username or password is incorrect. Please try again"
          );
        }
      }
    } catch (error) {
      {
        toast.error("Error occured.");
      }
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="container">
        <div className="imageLogin">
          <img
            src={image}
            alt="Chat"
            style={{ width: "700px", marginLeft: "50px" }}
          />
        </div>
        <div className={"mainContainer"}>
          <div className={"titleContainer"}>
            <div>Hola!</div>
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
            ></span>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              className={"inputBotton"}
              type="button"
              onClick={onBottonClick}
              value={"Login"}
            />
            <label className="errorLabel"></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
