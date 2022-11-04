import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";

import "./styles.css";
const ComprarPLC = () => {
  return (
    <>
      <div className="main">
        <Header pages={["", "", "none", "", "", "none"]} />
        <img className="imgFundo" src={fundo} alt="" />
        <div className="container container-comprarplc">
          <div className="row row-comprarplc">
            <div className="col col-box col-preco">
              <div id="valorplc-comprarplc" className="box">
                <div className="valorplc-comprarplc-a">
                  <div className="valorplc-comprarplc-aa">$PLC</div>
                  <div className="valorplc-comprarplc-ab">data hoje</div>
                </div>
                <div className="valorplc-comprarplc-b">0,00000</div>
                <div className="valorplc-comprarplc-c">+2.302.55 (12,3%)^ hoje</div>
              </div>
            </div>
            <div className="col col-box col-comprar">
              <div id="comprar-comprarplc" className="box">
                <div>Quanto deseja comprar?</div>
                <form className="form-comprarplc">
                  <div className="comprar-comprarplc-a">
                  <label>$PLC</label>
                    <input className="form-control comprar-input" placeholder="Unidades"/>
                  </div>
                  <div className="comprar-comprarplc-b">
                    <label>TOTAL</label>
                    <input className="form-control comprar-input" placeholder="Reais"/>
                  </div>
                  <div className="comprar-comprarplc-c">
                    <button type="button" className="btn-box btn-comprarplc">Comprar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row row-comprarplc">
            <div className="col col-box colStonks">
              <img className="srStonks srStonks-comprarplc" src={SrStonks} alt="" />
            </div>
            <div className="col col-box col-grafico">
              <div className="box">tem um grafico aqui</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ComprarPLC;
