import React from "react";
import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';

import "./Home.css";

import Navbar from "../Navbar/Navbar";

import PerfilImg from '../../img/perfil.png'
import EmailIcon from '../../img/email-icon.png'
import FoneIcon from '../../img/fone-icon.png'
import CalendarIcon from '../../img/calendar-icon.png'
import HambuguerIconOrange from '../../img/hambuguer-icon-orange.png'

export default function Home() {
  const navigate = useNavigate();

  const name: string  = 'Julia Machado';
  const email: string  = 'julia.machado@ijunior.com.br';
  const fone: string  = '(31) 98557-4855';
  const bithDate: string  = '12/11/1987';

  const [navbarMobile, setNavbarMobile] = useState(false);
  const [propsNavbar, setPropsNavbar] = useState(false);

  const navBarMobileActivate = () => {
    setNavbarMobile(!navbarMobile);

    document.querySelector(".perfil-container").style.display = 'none';
    setPropsNavbar(true);
  }

  useEffect(() => {
    localStorage.setItem("stateLog", "true");

    if (window.innerWidth <= 768) {
      setNavbarMobile(false);
    } else {
      setNavbarMobile(true);
    }

    /* a navbar [quando só ela está na tela] quando faz o resize ela some
      tem que corrigir isso
    */
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768 ) {
        setNavbarMobile(false);
      } else {
        setNavbarMobile(true);
        
      }
    });

  }, []);

  return (
    <div className="home-container">
      {navbarMobile && <Navbar state={propsNavbar}/>}
      <div className="perfil-container">
        <div className="menu-container">
          <span className="icon-mobile" onClick={()=>navBarMobileActivate()}>
            <img src={HambuguerIconOrange} alt="" />
          </span>
          <h1 className="title">Meus dados</h1>
          <button className="edit" onClick={() => navigate("/editar-perfil")}>
            Editar
          </button>
        </div>
        <div className="perfil-content">
          <div className="right-container">
            <img src={PerfilImg} alt="" />
            <p className="user-name">{name}</p>
          </div>
          <div className="vertical-line"></div>
          <div className="left-container">
            <p className="email-user">
              <img src={EmailIcon} alt="" />
              <span className="strong">Email: </span>
              {email}
            </p>
            <p className="fone-user">
              <span className="strong">
                {" "}
                <img src={FoneIcon} alt="" /> Celular:{" "}
              </span>
              <span className="for-mobile">{fone}</span>
            </p>
            <p className="birth-date-user">
              <img src={CalendarIcon} alt="" />
              <span className="strong">Data de nascimento: </span>
              {bithDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
