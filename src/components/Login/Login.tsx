import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import Logo from "../../img/logo.png";
import AlertModal from "../../utils/AlertModal";

export default function Login() {
  const navigate = useNavigate();

  const currentEmail: string = "teste@gmail.com"; // trocar pelo email do usuario quando tiver API
  const currentPassword: string = "123456"; // trocar pela senha do usuario quando tiver API

  // temporário, só para poder entrar na página Home
  useEffect(() => {
    localStorage.setItem("stateLog", "true");
  }, []);

  const [email, setEmail] = useState("");
  const [alertEmail, setAlertEmail] = useState(false);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const [password, setPassword] = useState("");
  const [alertPassword, setAlertPassword] = useState(false);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  function validationEmail(): boolean {
    if (email === currentEmail) {
      setAlertEmail(false);
      return true;
    } else {
      setAlertEmail(true);
      return false;
    }
  }

  function validationPassword(): boolean {
    if (password === currentPassword) {
      setAlertPassword(false);
      return true;
    } else {
      setAlertPassword(true);
      return false;
    }
  }

  const handleSubmit = () => {
    if (validationEmail() && validationPassword()) navigate("/home");
  };

  return (
    <div className="container">
      <div className="login-modal">
        <img src={Logo} alt="" className="login-logo" />
        <h1 className="login-title">Login</h1>
        <div className="login-inputs">
          { alertEmail && <AlertModal message="Email inválido!" />}
          <input
            type="email"
            placeholder="Email"
            className="login-email-input"
            onChange={handleEmail}
            value={email}
          />
          { alertPassword && <AlertModal message="Senha inválida!" />}
          <input
            type="password"
            placeholder="Senha"
            className="login-password-input"
            onChange={handlePassword}
            value={password}
          />
          <button className="login-button" onClick={() => handleSubmit()}>
            Entrar
          </button>
          <p
            className="login-forgot-password"
            onClick={() => navigate("/recuperar-senha")}
          >
            Esqueceu sua senha?
          </p>
        </div>
      </div>
    </div>
  );
}
