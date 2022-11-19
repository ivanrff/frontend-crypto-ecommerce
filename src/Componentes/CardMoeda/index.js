import ModalCompraMoeda from "../ModalCompraMoeda";
const CardMoeda = ({moeda, carteira, editarCarteira, qtdPlcMoeda, setQtdPlcMoeda, pauloCoin, setRetirada})=> {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">{moeda.nome}</div>
                <div className="col">{moeda.acronimo}</div>
                <div className="col">{moeda.precoInst}</div>
                <div className="col">{moeda.maxDiario}</div>
                <div className="col">{moeda.minDiario}</div>
                <div className="col">{moeda.open}</div>
                <div className="col">{moeda.close}</div>
                <div className="col"><ModalCompraMoeda moeda= {moeda} carteira = {carteira} 
                // editarCarteira={editarCarteira}
                // qtdPlcMoeda={qtdPlcMoeda} setQtdPlcMoeda={setQtdPlcMoeda} pauloCoin={pauloCoin} setRetirada={setRetirada}
                /></div>
            </div>
        </div>


        </>
    )
}
export default CardMoeda;