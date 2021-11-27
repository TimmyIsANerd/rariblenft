import { useState } from "react";
import { useMoralis } from "react-moralis";
const SignUp = () => {
  const { signup } = useMoralis();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <div className="form_element">
          <input
            className="form_control"
            type="username"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form_element">
          <input
            className="form_control"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="cta-button connect-wallet-button"
          onClick={() => signup(username, password)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
