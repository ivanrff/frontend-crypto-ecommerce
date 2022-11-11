import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import fundo from "../../imagens/fundo.jpg"
import FormularioCadastro from "../../Componentes/FormularioCadastro"
import SrStonks from "../../imagens/SrStonks.png";
import "./styles.css"

const Cadastro = () => {


    return (
        <>  
                <div className="main">
                <Header page="cadastro"/>
                <img className="imgFundo" src={fundo} alt=""/>
                <div className="container">
                    <div className="rowHome row">
                        <div className="col colStonks">
                            <img className="srStonks" src={SrStonks} alt=""/>
                        </div>
                        <div className="col colCadastro">
                            <FormularioCadastro/>
                        </div>
                    </div>
                </div>
                <Footer/>
                </div>

            

            
        </>
    )
}
export default Cadastro;