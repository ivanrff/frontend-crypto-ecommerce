import { useState, useEffect } from "react";
import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";
import "./styles.css";
import { getCarteiraByUsuarioId } from "../../Componentes/Service/ServiceCarteira";
import { putCarteira } from "../../Componentes/Service/ServiceCarteira";
import { getPauloCoin } from "../../Componentes/Service/ServicePauloCoin";

const ComprarPLC = () => {

  const [qtdPauloCoin, setQtdPauloCoin] = useState(0);
  const [totalReais, setTotalReais] = useState(0);
  const [carteira, setCarteira] = useState("");
  const [pauloCoin, setPauloCoin] = useState(0)
  const [idPlc, setIdPlc] = useState({"id": 1})

  //resolver o problema do id fixo tanto para buscar de carteira por usuario, quanto para busca de paulo coin por id
  useEffect(() => {
    getPauloCoin(1).then((response)=> 
    setPauloCoin(response.precoReal)
    ).catch()
    getCarteiraByUsuarioId(7).then((response)=>
    setCarteira(response)
    ).catch();
    
  }, []);
  
  useEffect(()=>{
    setTotalReais(pauloCoin*qtdPauloCoin);
  },[qtdPauloCoin]);

  

  const editarCarteira = () => {

    console.log(carteira.qtdPauloCoin + qtdPauloCoin)

    const carteiraEditada= {
   
      qtdPauloCoin: (carteira.qtdPauloCoin + qtdPauloCoin),
      totalReais: String(totalReais),
      pauloCoin: idPlc
     
  }
    putCarteira(carteira.id, carteiraEditada)

    setQtdPauloCoin("");
     
}


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
                    <input className="form-control comprar-input" placeholder="Unidades" value={qtdPauloCoin} onChange={(e) => setQtdPauloCoin(e.target.value)}/>
                  </div>
                  <div className="comprar-comprarplc-b">
                    <label>TOTAL</label>
                    <input className="form-control comprar-input" placeholder="Reais" value={totalReais}/>
                  </div>
                  <div className="comprar-comprarplc-c">
                    <button type="button" className="btn-box btn-comprarplc" onClick={editarCarteira }>Comprar</button>
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
