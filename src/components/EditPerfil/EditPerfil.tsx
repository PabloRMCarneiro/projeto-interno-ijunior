import React, { useState, useEffect } from "react";
import "./EditPerfil.css";
import isEmail from "validator/es/lib/isEmail";
import isDate from "validator/es/lib/isDate";

import AlertModal from "../../utils/AlertModal";
import Navbar from "../Navbar/Navbar";
import PerfilImg from "../../img/perfil.png";

import { useNavigate } from "react-router-dom";

export default function EditPerfil() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [alertName, setAlertName] = useState(false);
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const [email, setEmail] = useState("");
  const [alertEmail, setAlertEmail] = useState(false);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const [fone, setFone] = useState("");
  const [alertFone, setAlertFone] = useState(false);
  const validateExpressionFone = new RegExp(/^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{5}[-\s\.]?[0-9]{4}$/im);
  const handleFone = (e: React.ChangeEvent<HTMLInputElement>) => setFone(e.target.value);

  const [birthDate, setBirthDate] = useState("");
  const [alertBirthDate, setAlertBirthDate] = useState(false);
  const handleBirthDate = (e: React.ChangeEvent<HTMLInputElement>) => setBirthDate(e.target.value);

  function validationName(): boolean {
    if (name === "") {
      setAlertName(true);
      return false;
    }
    setAlertName(false);
    return true;
  }

  function validationEmail(): boolean {
    if (!isEmail(email)) {
      setAlertEmail(true);
      return false;
    }
    setAlertEmail(false);
    return true;
  }

  function validationFone(): boolean {
    if (!validateExpressionFone.test(fone)) {
      setAlertFone(true);
      return false;
    }
    setAlertFone(false);
    return true;
  }

  function validationBirthDate(): boolean {
    if (!isDate(birthDate)) {
      setAlertBirthDate(true);
      return false;
    }
    setAlertBirthDate(false);
    return true;
  }

  const handleSubmit = () => {
    
    if(validationName() && validationEmail() && validationFone() && validationBirthDate()) navigate("/home");
    
  };

  const handleEditPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = document.querySelector(".img-perfil") as HTMLImageElement;
        img.src = reader.result as string;
      }
    }
  }

  return (
    <div className="home-container">
      <Navbar />
      <div className="perfil-container">
        <div className="menu-container">
          <h1 className="title">Editar dados</h1>
        </div>
        <div className="perfil-content-edit">
          <div className="aux-container">
            <div className="right-container">
              <img src={PerfilImg} alt="" className="img-perfil"/>
              <label htmlFor="picture__input" className="picture">
                <span className="picture__image">Editar foto</span>
              </label>
              <input 
                type="file" 
                name="" 
                id="picture__input" 
                accept="image/*"
                onChange={handleEditPhoto}
                />
            </div>
            <div className="vertical-line"></div>
            <div className="left-container">
              <form action="" className="forms-edit-perfil">
                <p className="title">Nome</p>
                {alertName && <AlertModal message="Nome inválido!" />}
                <input
                  type="text"
                  placeholder="Nome"
                  className="nome-edit"
                  onChange={handleName}
                  value={name}
                />
                <p className="title">Email</p>
                {alertEmail && <AlertModal message="Email inválido!" />}
                <input
                  type="email"
                  placeholder="Email"
                  className="email-edit"
                  onChange={handleEmail}
                  value={email}
                />
                <p className="title">Celular <span className="regex-fone">(xx) xxxxx-xxxx</span></p>
                {alertFone && <AlertModal message="Celular inválido!" />}
                <input
                  type="tel"
                  placeholder="Celular"
                  className="fone-edit"
                  onChange={handleFone}
                  value={fone}
                />
                <p className="title">Data de nascimento</p>
                {alertBirthDate && <AlertModal message="Data de nascimento inválida!" />}
                <input
                  type="date"
                  placeholder="Data de nascimento"
                  className="bith-date-edit"
                  onChange={handleBirthDate}
                  value={birthDate}
                />
              </form>
            </div>
          </div>
          <button className="save-editions" onClick={() => handleSubmit()}>
            Salvar Alterações
          </button>
          <button
            className="password-edit"
            onClick={() => {
              navigate("/editar-senha");
            }}
          >
            Editar Senha
          </button>
        </div>
      </div>
    </div>
  );
}
