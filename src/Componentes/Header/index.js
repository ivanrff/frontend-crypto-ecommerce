import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css";
import logo from "../../imagens/logo.png";
import logo2 from "../../imagens/logo2.png"

const Header = (props) => {

  return (
      <div>
        <Navbar className="header" >
          <Link to="/home" className="logo-nav me-2">
            <img src={logo} width="60px" alt="" />
          </Link>
          {props.page==="home"?
            <div className="header-nav home-nav black">HOME</div>:
            <Link to="/home" className="header-nav header-navlink home-nav">HOME</Link>
          }
          {props.page==="painel"?
            <div className="header-nav painel-nav black">Painel</div>:
            <Link to="/painel" className="header-nav header-navlink painel-nav">Painel</Link>
          }
          {props.page==="comprar-plc"?
            <div className="header-nav comprar-nav black">Comprar $PLC</div>:
            <Link to="/comprar-plc" className="header-nav header-navlink comprar-nav">Comprar $PLC</Link>
          }

          {props.page==="carteira"?
            <div className="header-nav carteira-nav black">Carteira</div>:
          <Link to="/carteira" className="header-nav header-navlink carteira-nav" >Carteira</Link>
          }
          {props.page==="cambio"?
          <div className="header-nav cambio-nav black">Câmbio</div>:
          <Link to="/cambio" className="header-nav header-navlink cambio-nav" >Câmbio</Link>
          }

          {props.page==="home" &&
          <Link to="/cadastro" className="header-cadastrar btn me-4" >Cadastrar</Link>
          }
          <img id="logo2" src={logo2} width="20px" alt="" className="me-1"/>
        </Navbar>
      </div>
  )
}
export default Header;