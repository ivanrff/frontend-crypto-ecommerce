import { useState, useEffect } from "react";
import { getCarteiraByUsuarioId } from "../Service/ServiceCarteira";
import { putCarteira } from "../Service/ServiceCarteira";
import { getPauloCoin } from "../Service/ServicePauloCoin";


const CompraPLC = () => {
    
    const [qtdPauloCoin, setQtdPauloCoin] = useState("");
    const [totalReais, setTotalReais] = useState(0);
    const [carteira, setCarteira] = useState("");
    const [pauloCoin, setPauloCoin] = useState(0);
    //acertar os id´s, transformar tudo pra automatico após o acesso com senha e login 
    const [idPlc, setIdPlc] = useState({ "id": 1 });
    const [idUser, setIdUser] = useState({ "id": 14 });
    

    //resolver o problema do id fixo tanto para buscar de carteira por usuario, quanto para busca de paulo coin por id
    useEffect(() => {
        getPauloCoin(1).then((response) =>
            setPauloCoin(response.precoReal)
        ).catch()
        getCarteiraByUsuarioId(14).then((response) => {
            setCarteira(response)
        }
        ).catch();
        setTotalReais(pauloCoin * qtdPauloCoin);

    }, [qtdPauloCoin]);


    const editarCarteira = () => {
        
        
        const carteiraEditada = {

            qtdPauloCoin: carteira.qtdPauloCoin + Number(qtdPauloCoin),
            totalReais: (carteira.qtdPauloCoin + Number(qtdPauloCoin))*pauloCoin,
            pauloCoin: idPlc,
            usuario: idUser

        }
        putCarteira(carteira.id, carteiraEditada).then().catch();

        setQtdPauloCoin("");

    }
    return (
        <>
            <div id="comprar-comprarplc" className="box">
                <div>Quanto deseja comprar?</div>
                <form className="form-comprarplc">
                    <div className="comprar-comprarplc-a">
                        <label>$PLC</label>
                        <input className="form-control comprar-input" placeholder="Unidades" value={qtdPauloCoin} onChange={(e) => setQtdPauloCoin(e.target.value)} />
                    </div>
                    <div className="comprar-comprarplc-b">
                        <label>TOTAL</label>
                        <input className="form-control comprar-input" placeholder="Reais" value={totalReais} />
                    </div>
                    <div className="comprar-comprarplc-c">
                        <button type="button" className="btn-box btn-comprarplc" onClick={editarCarteira} >Comprar</button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default CompraPLC;


