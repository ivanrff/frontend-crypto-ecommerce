
import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg";
import SrStonks from "../../imagens/SrStonks.png";
import "./styles.css";
import CotacaoPLC from "../../Componentes/CotacaoPLC";
import CompraPLC from "../../Componentes/CompraPLC";
import GraficoPLC from "../../Componentes/GraficoPLC";
import { getPauloCoin } from "../../Componentes/Service/ServicePauloCoin";
import { useEffect } from "react";
import { useState } from "react";

const ComprarPLC = () => {

  const [pauloCoin, setPauloCoin] = useState("");
  const [plc, setPlc] = useState("");


  useEffect(() => {
    getPauloCoin(1).then((response) =>{
      console.log(response)
        setPauloCoin(response)
     } ).catch();

     getPauloCoin(3).then((response) =>{
      console.log(response)
        setPlc(response)
     } ).catch();

}, []);


  return (
    <>
      <div className="main">
        <Header page="comprar-plc"/>
        <img className="imgFundo" src={fundo} alt="" />
        <div className="container container-comprarplc">
          <div className="row row-comprarplc">
            <div className="col col-box col-preco">
              <CotacaoPLC pauloCoin = {pauloCoin} plc = {plc} />
            </div>
            <div className="col col-box col-comprar">
              <CompraPLC/>
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
