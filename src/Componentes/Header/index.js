import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css";
import logo from "../../imagens/logo.png";
import logo2 from "../../imagens/logo2.png"

const Header = props => {
  const { pages, ...other } = props;

  return (
      <div>
        <Navbar className="header" {...other}>
          <Link to="/home" className="logo-nav me-2">
            <img src={logo} width="60px" alt="" />
          </Link>
          <Link to="/home" className="header-nav home-nav" style={{display: pages[0]}}>HOME</Link>
          <Link to="/painel" className="header-nav painel-nav" style={{display: pages[1]}}>Painel</Link>
          <Link to="/comprar-plc" className="header-nav comprar-nav" style={{display: pages[2]}}>Comprar $PLC</Link>
          <Link to="/carteira" className="header-nav carteira-nav" style={{display: pages[3]}}>Carteira</Link>
          <Link to="/cambio" className="header-nav cambio-nav" style={{display: pages[4]}}>Câmbio</Link>
          <Link to="/cadastro" className="header-cadastrar btn me-4" style={{display: pages[5]}}>Cadastrar</Link>
          <img id="logo2" src={logo2} width="20px" alt="" className="me-1"/>
        </Navbar>
      </div>
  )
}
export default Header;