import React, { useState } from "react";
import "./EditPassword.css";

import Navbar from "../Navbar/Navbar";
import AlertModal from "../../utils/AlertModal";

import { useNavigate } from "react-router-dom";

export default function EditPassword() {
  const navigate = useNavigate();

  const CurrentPasswordAux = "123456"; // enquanto não tem API, apenas para validação

  const [newPassword, setNewPassword] = useState("");
  const [alertNewPassword, setAlertNewPassword] = useState(false);
  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPassword(e.target.value);

  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [alertConfirmNewPassword, setAlertConfirmNewPassword] = useState(false);
  const handleConfirmNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmNewPassword(e.target.value);

  function validateNewPassword(): boolean {
    if (newPassword === "" || newPassword === CurrentPasswordAux) {
      setAlertNewPassword(true);
      return false;
    }
    setAlertNewPassword(false);
    return true;
  }

  function validateConfirmNewPassword(): boolean {
    if (confirmNewPassword === "" || confirmNewPassword !== newPassword) {
      setAlertConfirmNewPassword(true);
      return false;
    }
    setAlertConfirmNewPassword(false);
    return true;
  }

  const handleSubmit = () => {
    if (validateNewPassword() && validateConfirmNewPassword())
      navigate("/editar-perfil");
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="perfil-container">
        <div className="menu-container">
          <h1 className="title">Editar senha</h1>
        </div>
        <div className="perfil-content-edit-pass">
          <form action="" className="forms-edit-perfil-edit-pass">
            <p className="title">Nova senha</p>
            {alertNewPassword && <AlertModal message="Senha inválida!" />}
            <input
              type="password"
              placeholder="Nome"
              className="pass-edit"
              onChange={handleNewPassword}
              value={newPassword}
            />
            <p className="title">Confirmar nova senha</p>
            {alertConfirmNewPassword && (
              <AlertModal message="Senhas não são iguais!" />
            )}
            <input
              type="password"
              placeholder="Confirmar nova senha"
              className="new-pass-edit"
              onChange={handleConfirmNewPassword}
              value={confirmNewPassword}
            />
            <button
              className="salve"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Salvar alterações
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
