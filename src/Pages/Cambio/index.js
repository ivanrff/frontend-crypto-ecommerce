import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";

import "./styles.css";
const Cambio = () => {
  return (
    <>
      <div className="main">
        <Header pages={["", "", "", "", "none", "none"]} />
        <img className="imgFundo" src={fundo} alt="" />
        <div className="container-cambio">
          <img className="srStonks srStonks-cambio" src={SrStonks} alt="" />
          <div className="col-box col-box-cambio">
            <div className="box box-cambio">
              <div className="cabecalho-cambio">
                MOEDA VARIACAO MINIMA MAXIMA SPLC RS
              </div>
              <div className="moedas-cambio">
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>
                <div className="moeda-row">aaaaaaa bbbbbbbb cccccccc ddddddd eeee fff <button type="button" className="btn-box">Comprar</button></div>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Cambio;
