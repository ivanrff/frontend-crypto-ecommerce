import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import ListaMoedasCambio from "../../Componentes/ListaMoedasCambio";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";

import "./styles.css";
const Cambio = () => {
  return (
    <>
      <div className="main">
        <Header page="cambio"/>
        <img className="imgFundo" src={fundo} alt="" />
        <div className="container-cambio">
          <img className="srStonks srStonks-cambio" src={SrStonks} alt="" />
          <div className="col-box col-box-cambio">
            <ListaMoedasCambio />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Cambio;
