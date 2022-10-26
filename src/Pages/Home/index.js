import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.png"
import Login from "../../Componentes/Login";
import "./styles.css"
const Home = () => {
    return (
        <>
            <Header/>
            <img className="imgFundo" src={fundo} alt="" width="100%" height="100%"/>
            <div className="contHome container">
                <div className="row">
                    <div className="col-md-7"></div>
                    <div className="col-md-5">
                        <Login/>
                    </div>
                </div>
            </div>
            

            

            
        </>
    )
}
export default Home;