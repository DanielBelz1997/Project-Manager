import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [submittedData, setSubmittedData] = useState(null);

  // const navigate = useNavigate();

  const onBottonClick = () => {
    // what we will do here?
  };

  return (
    <>
      <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div>התחבר</div>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={username}
            placeholder="username"
            onChange={(ev) => setUsername(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={password}
            placeholder="password"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            className={"inputBotton"}
            type="button"
            onClick={onBottonClick}
            value={"התחבר"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
