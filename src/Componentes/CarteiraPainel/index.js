import { Link } from "react-router-dom";

const CarteiraPainel = () => {
    return (
        <>
            <div id="resumo-carteira" className="box">
                <div className="resumo-carteira-a">$PLC</div><div className="resumo-carteira-b"><Link to="/comprar-plc" className="text-link"><u>Adicionar Fundos</u></Link></div>
                <div className="resumo-carteira-c">0,00000</div>
            </div>
        </>
    )
}

export default CarteiraPainel;