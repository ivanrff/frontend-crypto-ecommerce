
import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";
import "./styles.css";

import CotacaoPLC from "../../Componentes/CotacaoPLC";
import CompraPLC from "../../Componentes/CompraPLC";
import GraficoPLC from "../../Componentes/GraficoPLC";

const ComprarPLC = () => {

  return (
    <>
      <div className="main">
        <Header page="comprar-plc"/>
        <img className="imgFundo" src={fundo} alt="" />
        <div className="container container-comprarplc">
          <div className="row row-comprarplc">
            <div className="col col-box col-preco">
              <CotacaoPLC />
            </div>
            <div className="col col-box col-comprar">
              <CompraPLC />
            </div>
          </div>
          <div className="row row-comprarplc">
            <div className="col col-box colStonks">
              <img className="srStonks srStonks-comprarplc" src={SrStonks} alt="" />
            </div>
            <div className="col col-box col-grafico">
              <GraficoPLC />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ComprarPLC;
