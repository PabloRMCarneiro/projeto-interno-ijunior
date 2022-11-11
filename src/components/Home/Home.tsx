import React from "react";
import { useEffect } from "react";
import './Home.css';

import Navbar from "../Navbar/Navbar";
import Perfil from "../Perfil/Perfil";

export default function Home() {
  useEffect(() => {
    localStorage.setItem("stateLog", "true");
  }, []);

  return (
    <div className="home-container">
      <Navbar/>
      <Perfil/>
    </div>
    );
}
