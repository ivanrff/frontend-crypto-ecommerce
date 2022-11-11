import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg"
import Login from "../../Componentes/Login";
import SrStonks from "../../imagens/SrStonks.png";
import "./styles.css"
const Home = () => {
    return (
        <>  

                <div className="main">

                <Header page="home"/>
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