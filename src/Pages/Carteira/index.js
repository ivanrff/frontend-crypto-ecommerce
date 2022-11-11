import CartaoCarteira from "../../Componentes/CartaoCarteira";
import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import SaldoCarteira from "../../Componentes/SaldoCarteira";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";

import "./styles.css";
const Carteira = () => {
  return (
    <>
      <div className="main">
        <Header page="carteira" />
        <img className="imgFundo" src={fundo} alt="" />
        <img className="srStonks srStonks-carteira" src={SrStonks} alt="" />
        <div className="container-carteira">
          
          <div className="col-box col-box-carteira">
            <SaldoCarteira />
            <CartaoCarteira />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Carteira;
