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
    const [valorTeste, setValorTeste] = useState("")

    //resolver o problema do id fixo tanto para buscar de carteira por usuario, quanto para busca de paulo coin por id
    useEffect(() => {
        getPauloCoin(1).then((response) =>
            setPauloCoin(response.precoReal)
        ).catch()
        getCarteiraByUsuarioId(14).then((response) => {
            setValorTeste(response.qtdPauloCoin)
            setCarteira(response)
        }
        ).catch();

    }, [qtdPauloCoin]);

    useEffect(() => {
        setTotalReais(pauloCoin * qtdPauloCoin);
    }, [qtdPauloCoin]);



    const editarCarteira = () => {
        console.log("carteira", carteira.qtdPauloCoin)
        console.log(Number(carteira.qtdPauloCoin) + Number(qtdPauloCoin))

        const soma = valorTeste + Number(qtdPauloCoin)


        const carteiraEditada = {

            qtdPauloCoin: soma,
            totalReais: String(totalReais),
            pauloCoin: idPlc,
            usuario: idUser

        }

        console.log("carteira editada", carteiraEditada)
        console.log("carteira id", carteira.id)

        putCarteira(carteira.id, carteiraEditada).then((response) =>
            console.log("response", response)
        ).catch();

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


