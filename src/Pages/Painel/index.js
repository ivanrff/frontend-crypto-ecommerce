import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";

import "./styles.css";
const Painel = () => {
  return (
    <>
      <div className="main">
        <Header page="painel" />
        <img className="imgFundo" src={fundo} alt="" />
        <div className="container">
          <div className="rowHome row">
            <div className="col colStonks">
              <img className="srStonks" src={SrStonks} alt="" />
            </div>
            <div className="col col-box col-painel">
              <div id="resumo-carteira" className="box">
                <div className="resumo-carteira-a">$PLC</div><div className="resumo-carteira-b">Adicionar Fundos</div>
                <div className="resumo-carteira-c">0,00000</div>
              </div>
              <div id="resumo-historico" className="box">
                <div id="resumo-historico-titulo">Atividades Recentes</div>
                <div className="resumo-atividades">
                  <div className="resumo-moeda">PauloCoin</div><div className="resumo-qtd">-30,00</div>
                  <div className="resumo-data">ontem</div>
                </div>
                <div className="resumo-atividades">
                  <div className="resumo-moeda">PauloCoin</div><div className="resumo-qtd">-30,00</div>
                  <div className="resumo-data">ontem</div>
                </div>
                <div id="resumo-historico-exibirtudo">Exibir tudo</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Painel;
