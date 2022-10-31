import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";

import "../../CSS-globais/box-conteudo.css";
import "./styles.css";
const Painel = () => {
  return (
    <>
      <div className="main">
        <Header />
        <img className="imgFundo" src={fundo} alt="" />
        <div className="container">
          <div className="rowHome row">
            <div className="col colStonks">
              <img className="srStonks" src={SrStonks} alt="" />
            </div>
            <div className="col colCadastro col-box">
              <div id="resumo-carteira" className="box">
                <div>$PLC</div><div>Adicionar Fundos</div>
                <div>0,00000</div>
              </div>
              <div id="resumo-historico" className="box">
                <div>Atividades Recentes</div>
                <div>atividade1</div>
                <div>atividade2</div>
                <div>exibir tudo</div>
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
