import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import Painel from "../Pages/Painel";
import ComprarPLC from "../Pages/ComprarPLC";
import { AuthContext } from "../Context/auth";
//import ProtectedRoutes from "../ProtectedRoutes";

const Rotas = () => {
  const [usuario, setUsuario] = useState(null);

  const logar = (login, senha) => {
    setUsuario({ nome: "Mariazinha Silveira da Silva", senha });
  };

  const logout = () => {};

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{ authenticated: !!usuario, usuario, logar, logout }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/painel" element={<Painel />} />
          <Route path="/comprar-plc" element={<ComprarPLC />} />

          {usuario && <Route path="/Home" element={<Home />} />}
          <Route
            path="*"
            element={usuario ? <Home /> : <Navigate to="/home" />}
          />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default Rotas;
