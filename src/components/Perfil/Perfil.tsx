import React from 'react'
import './Perfil.css';

import PerfilImg from '../../img/perfil.png'
import EmailIcon from '../../img/email-icon.png'
import FoneIcon from '../../img/fone-icon.png'
import CalendarIcon from '../../img/calendar-icon.png'

import { useNavigate } from 'react-router-dom';

export default function Perfil() {

  const navigate = useNavigate();

  const name: String  = 'Julia Machado';
  const email: String  = 'julia.machado@ijunior.com.br';
  const fone: String  = '(31) 98557-4855';
  const bithDate: String  = '12/11/1987';
  
  return (
    <div className="perfil-container">
      <div className="menu-container">
        <h1 className="title">Meus dados</h1>
        <button className="edit" onClick={() => navigate('/editar-perfil')}>Editar</button>
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
            <span className='strong'>Email: </span>
            {email}
          </p>
          <p className="fone-user">
            <img src={FoneIcon} alt="" />
            <span className='strong'>Celular: </span>
            {fone}
          </p>
          <p className="birth-date-user">
            <img src={CalendarIcon} alt="" />
            <span className='strong'>Data de nascimento: </span>
            {bithDate}
          </p>
        </div>
      </div>
    </div>
  )
}