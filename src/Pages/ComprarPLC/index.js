import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";

import "../../CSS-globais/box-conteudo.css";
import "./styles.css";
const ComprarPLC = () => {
  return (
    <>
      <div className="main">
        <Header pages={["","","none","","","none"]} />
        <img className="imgFundo" src={fundo} alt="" />
        <div className="container container-comprarplc">
          <div className="row row-comprarplc">
            <div className="col col-box col-preco">
              <div id="resumo-carteira" className="box">
                <div className="resumo-carteira-a">$PLC</div><div className="resumo-carteira-b">Adicionar Fundos</div>
                <div className="resumo-carteira-c">0,00000</div>
              </div>
            </div>
            <div className="col col-box col-comprar">
              <div className="box">d</div>
            </div>
          </div>
          <div className="row row-comprarplc">
            <div className="col col-box colStonks">
              <img className="srStonks srStonks-comprarplc" src={SrStonks} alt=""/>
            </div>
            <div className="col col-box col-grafico">
              <div className="box">d</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ComprarPLC;
