import AtividadesPainel from "../../Componentes/AtividadesPainel";
import CarteiraPainel from "../../Componentes/CarteiraPainel";
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
              {/*  */}
              <CarteiraPainel />
              {/*  */}
              <AtividadesPainel />
              {/*  */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Painel;
