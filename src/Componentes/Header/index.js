import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css";
import logo from "../../imagens/logo.png";
import logo2 from "../../imagens/logo2.png"

const Header = () => {
    return (
        <>
      <div className="header">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href="/home">
            <img src={logo} width="60px" alt="" />
          </Navbar.Brand>
          <Nav className=" me-auto ">
            <Nav.Link className='homePage' href="/home">HOME</Nav.Link>
          </Nav>
          <Nav.Link
            className="login btn  btn-outline me-5"
            href="/login"
          >
            Cadastrar{" "}
          </Nav.Link>
          <Nav.Link>
            <img className='me-4' src={logo2} width="20px" alt="" />
          </Nav.Link>
        </Navbar>
        </div>
     </>
    )
}
export default Header;