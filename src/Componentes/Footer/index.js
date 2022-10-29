import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"; 
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill} from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import pagamentos from "../../imagens/pagamentos.png";




const Footer = () => {
    return (
        <>
      <div className="footer ">
        <div className="container">
            <div className="row ">
                <div className="col-sm-1 mt-4 ">  
                    <a className='ancorasSites' href="https://www.facebook.com/" target="_blank" >
                        <BsFacebook size={40} />
                    </a>
                </div>
                <div className="col-sm-1 mt-4">
                    <a className='ancorasSites' href="https://www.instagram.com/" target="_blank" >
                        <RiInstagramFill size={40}/>
                    </a>
                </div>
                <div className=" col-sm-1 mt-4 ">
                    <a className='ancorasSites' href="mailto: d-moreira18@hotmail.com" target="_blank"  >
                        <MdEmail size={40}/>
                    </a>
                </div>
                <div className="textFooter col-sm-6 text-center mt-4">© 2022 - PauloStonks</div>
                <div className="col-sm-3 text-center">
                    <label htmlFor="" className='tituloPag'>Pagamentos</label>
                    <img src={pagamentos} alt="" />
                </div>
            </div>
        </div>
      </div>
     </>
    )
}
export default Footer;