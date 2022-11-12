import { useState, useEffect } from "react";
import { getPauloCoin } from "../Service/ServicePauloCoin";
import Loading from "../Loading";

const CotacaoPLC = ({ pauloCoin, plc }) => {

    const [hoje, setHoje] = useState("");
    const [corCotacao, setCorCotacao] = useState("");
    const [toggle, setToggle] = useState(false);
    const [precoRealPlc, setPrecoRealPlc] = useState(0);
    const [percentPlc, setPercentPlc ] = useState(0);
    const [diferencaPlc, setDiferencaPlc] = useState(0);
    const [carregando, setCarregando] = useState(true);
    const [seta, setSeta] = useState("")


    useEffect(() => {
        const data = new Date();
        setHoje(data.toLocaleDateString())

        // const intervalID = setInterval(() => {

            if ((pauloCoin.precoReal - plc.precoReal) > 0) {
                setCorCotacao("valorplc-comprarplc-c-verde")
                setSeta("↑")
                console.log((pauloCoin.precoReal - plc.precoReal))
            } else if ((pauloCoin.precoReal - plc.precoReal) < 0) {
                setCorCotacao("valorplc-comprarplc-c-verm")
                setSeta("↓")
                console.log((pauloCoin.precoReal - plc.precoReal))
            } else {
                setCorCotacao("valorplc-comprarplc-c-preto")
            }
            setToggle((toggle) => !toggle)
        // }, 300000);

        // return () => clearInterval(intervalID);

        const dif = (pauloCoin.precoReal - plc.precoReal).toFixed(2);
        const cont = Math.abs(((pauloCoin.precoReal - plc.precoReal) * 100 / plc.precoReal).toFixed(2));
        const contFinal = String(cont).replace(".", ",");
        const plCoin = String(pauloCoin.precoReal).replace(".", ",");


            setPrecoRealPlc(plCoin);
            setPercentPlc(contFinal);
            setDiferencaPlc(dif);

           if(pauloCoin.precoReal != null){
                setCarregando(false)
           } 
        
    }, [pauloCoin, plc])


   
    return (
        <>
            <div id="valorplc-comprarplc" className="box">
                {carregando? <>
                <Loading/>
                </>
                    :
                    <>
                    <div className="valorplc-comprarplc-a">
                        <div className="valorplc-comprarplc-aa">$PLC</div>
                        <div className="valorplc-comprarplc-ab">{hoje}</div>
                    </div>
                    <div className="valorplc-comprarplc-b">R$ {precoRealPlc}</div>
                    <div className={"valorplc-comprarplc-c " + corCotacao}>{diferencaPlc} ({percentPlc}%) hoje {seta}</div>
                </> }
                </div>
        </>
    );
};
export default CotacaoPLC;
