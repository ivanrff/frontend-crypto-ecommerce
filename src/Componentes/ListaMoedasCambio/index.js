import { useState, useEffect } from "react";
import ModalCompraMoeda from "../ModalCompraMoeda";
import { getMoeda } from "../Service/ServiceMoeda";
import CardMoeda from "../CardMoeda";
import { getCarteiraByUsuarioId } from "../Service/ServiceCarteira";
import { putCarteira } from "../Service/ServicePauloCoin";
import { getPauloCoin } from "../Service/ServicePauloCoin";

const ListaMoedasCambio = () => {

  const [moedas , setMoedas] = useState([])
  const [carteira, setCarteira] = useState()
  const [idPlc, setIdPlc] = useState({ "id": 1 });
  const [idUser, setIdUser] = useState({ "id": 14 });
  const [pauloCoin, setPauloCoin] = useState(0);
  const [qtdPlcMoeda, setQtdPlcMoeda] = useState("");

  useEffect (()=>{
    getCarteiraByUsuarioId(14).then(response => {
        console.log(response)
        setCarteira(response)
      }).catch()
  },[])

  useEffect (()=>{
    getMoeda().then(response => {
        setMoedas(response)
      }).catch()
  },[])

  useEffect(() => {
    getPauloCoin(1).then((response) =>
        setPauloCoin(response.precoReal)
    ).catch()

}, []);

  const editarCarteira = (retirada)=> {
//multiplicar preço plc pelo input
//retirada é = preçoBTC*quantidade da moeda inpputada

    const carteiraEditada = {

      qtdPauloCoin: carteira.qtdPauloCoin - retirada,
      totalReais: (carteira.qtdPauloCoin - retirada)*pauloCoin,
      pauloCoin: { "id": 1 },
      usuario: { "id": 14 }

  }
  putCarteira(carteira.id, carteiraEditada).then().catch();

  setQtdPlcMoeda("");
    }


  return (
    <>
      <div className="box box-cambio">
        <div className="cabecalho-cambio container">
          <div className="row">
            <div className="col">MOEDA</div>
            <div className="col">$PLC</div>
            <div className="col">MAX</div>
            <div className="col">MIN</div>
            <div className="col">$ABERTURA</div>
            <div className="col">$FECHAMENTO</div>
            <div className="col"> - </div>

          </div>
          
        </div>
        <div className="moedas-cambio">
          <div className="moeda-row">
            {moedas.map((moeda)=> <CardMoeda key={moeda.id} moeda={moeda} carteira = {carteira} editarCarteira={editarCarteira}
            qtdPlcMoeda={qtdPlcMoeda} setQtdPlcMoeda={setQtdPlcMoeda} pauloCoin={pauloCoin}/> )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ListaMoedasCambio;
