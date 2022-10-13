import "./login.scss";
import { useState, useContext, useEffect, FormEvent } from "react";
import SignIn from "../../assets/signin.svg";
import Logo from "../../components/Logo/logo";
import { UsersActionsContext, UsersContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Login(): JSX.Element {
  const navigate = useNavigate();
  const { loginUser } = useContext(UsersActionsContext);
  const { isAuthenticated } = useContext(UsersContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  // useEffect(() => {
  //   //is user is authenticated navigate to dashboard
  //   if (isAuthenticated) {
  //     navigate("/dashboard/users");
  //   }

  // }, [isAuthenticated]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser();
    navigate("/dashboard/users");
  };

  return (
    <div className="login__container">
      <div className="login__left">
        <div className="login__logo">
          <Logo />
        </div>
        <div className="logo__signin">
          <img src={SignIn} alt="signin" />
        </div>
      </div>
      <div className="login__right">
        <form onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <input
            type="email"
            placeholder="Email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="login__password">
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              required={true}
              value={password}
              autoComplete="true"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordShown ? (
              <h2
                className="login__password__show"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                HIDE
              </h2>
            ) : (
              <h2
                className="login__password__show"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                SHOW
              </h2>
            )}
          </div>
          <h2>Forgot PASSWORD?</h2>
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
