import { useState, useEffect } from "react";
import { getPauloCoin } from "../Service/ServicePauloCoin";

const CotacaoPLC = ({ pauloCoin, plc }) => {

    const [hoje, setHoje] = useState("");
    const [corCotacao, setCorCotacao] = useState("")
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        const data = new Date();
        setHoje(data.toLocaleDateString())

        const intervalID = setInterval(() => {

            if ((pauloCoin.precoReal - plc.precoReal) > 0) {
                setCorCotacao("valorplc-comprarplc-c-verde")
                console.log((pauloCoin.precoReal - plc.precoReal))
            } else if ((pauloCoin.precoReal - plc.precoReal) < 0) {
                setCorCotacao("valorplc-comprarplc-c-verm")
                console.log((pauloCoin.precoReal - plc.precoReal))
            } else {
                setCorCotacao("valorplc-comprarplc-c-preto")
            }
            setToggle((toggle) => !toggle)
        }, 3000);

        return () => clearInterval(intervalID);

    }, [pauloCoin, plc])

    const dif = (pauloCoin.precoReal - plc.precoReal).toFixed(2);
    const cont = Math.abs(((pauloCoin.precoReal - plc.precoReal) * 100 / plc.precoReal).toFixed(2));
    const contFinal = String(cont).replace(".", ",");
    const plCoin = String(pauloCoin.precoReal).replace(".", ",");

    return (
        <>
            <div id="valorplc-comprarplc" className="box">
                <div className="valorplc-comprarplc-a">
                    <div className="valorplc-comprarplc-aa">$PLC</div>
                    <div className="valorplc-comprarplc-ab">{hoje}</div>
                </div>
                <div className="valorplc-comprarplc-b">{plCoin}</div>
                <div className={"valorplc-comprarplc-c " + corCotacao}>{dif} ({contFinal}%) hoje</div>
            </div>
        </>
    );
};
export default CotacaoPLC;
