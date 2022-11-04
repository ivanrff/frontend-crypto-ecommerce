import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";

import "./styles.css";
const Carteira = () => {
  return (
    <>
      <div className="main">
        <Header pages={["", "", "", "none", "", "none"]} />
        <img className="imgFundo" src={fundo} alt="" />
        <img className="srStonks srStonks-carteira" src={SrStonks} alt="" />
        <div className="container-carteira">
          
          <div className="col-box col-box-carteira">
            <div className="box box-carteira-saldo">
              <div className="item-a">
                <div className="item-aa">$PLC</div>
                <div className="item-ab">Adicionar Fundos</div>
              </div>
              <div className="item-b">0,000000000</div>
            </div>
            <div className="box box-carteira-cartao">
              <div>Cartão Cadastrado</div>
              <div>Visa</div>
              <div>Titular: PAULO</div>
              <div>Numero: 1234 1234 1234 1234</div>
              <div>Vencimento: 20/30/2020</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Carteira;
