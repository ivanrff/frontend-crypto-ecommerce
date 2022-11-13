import { useEffect } from "react";
import { useState } from "react";
import { getCarteiraByUsuarioId } from "../../Componentes/Service/ServiceCarteira";
import { Link } from "react-router-dom";

const CarteiraPainel = () => {

    const [saldo, setSaldo] = useState("")

    useEffect(() => {
        getCarteiraByUsuarioId(11).then(
            (response) =>{
                setSaldo(response.qtdPauloCoin.toFixed(2).replace(".", ","))
            }
        ).catch();
    }, []);


    return (
        <>
            <div id="resumo-carteira" className="box">
                <div className="resumo-carteira-a">$PLC</div><div className="resumo-carteira-b"><Link to="/comprar-plc" className="text-link"><u>Adicionar Fundos</u></Link></div>
                <div className="resumo-carteira-c">{saldo}</div>
            </div>
        </>
    )
}

export default CarteiraPainel;