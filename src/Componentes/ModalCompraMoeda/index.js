import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./styles.css"

const ModalCompraMoeda = ({moeda, carteira, editarCarteira, qtdPlcMoeda, setQtdPlcMoeda, pauloCoin, setRetirada}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btnModal' onClick={handleShow}>
        Comprar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
             <div><img className='me-4' src={moeda.iconUrl} alt="" width="40px" /> {moeda.nome}</div> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Quantos {moeda.nome} deseja comprar? 
        <div className="container">
          <div className="row">
            <div className="col">
              <input className='mt-4' type="number" placeholder='Ex: 15' />
            </div>
            <div className="col">
              <label htmlFor="">Total $PLC antes da compra</label>
              <input type="text" disabled value={"$PLC "+ carteira.qtdPauloCoin}/>
              <label htmlFor="">Total $PLC após a compra</label>
              <input type="text" value={"$PLC "}   disabled />
            </div>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCompraMoeda;
