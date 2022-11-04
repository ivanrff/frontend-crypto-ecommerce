import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg"
import Login from "../../Componentes/Login";
import SrStonks from "../../imagens/SrStonks.png";
import "../../CSS-globais/box-conteudo.css";
import "./styles.css"
const Home = () => {
    return (
        <>  

                <div className="main">

                <Header pages={["none","none","none","none","none",""]}/>
                <img className="imgFundo" src={fundo} alt=""/>
                <div className="container1 container">
                    <div className="rowHome row">
                        <div className="col colStonks">
                            <img className="srStonks" src={SrStonks} alt=""/>
                        </div>
                        <div className="col colLogin">
                            <Login/>
                        </div>
                    </div>
                </div>

                <Footer/>
                </div>

            
        </>
    )
}
export default Home;