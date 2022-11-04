import "./styles.css";
import { useState } from "react";
import { postUsuario } from "../Service/ServiceUsuario";

const Login = () => {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [cartaoCredito, setCartaoCredito] = useState("");
    const [rua, setRua] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [uf, setUf] = useState("");
    const [numeroResidencial, setNumeroResidencial] = useState("");
    const [perfil, setPerfil] = useState({"id": "2"});
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    
    

    const adicionarUsuario = async () => {

        if (nome === "" || cpf === "" || email === "" ||
         cartaoCredito === "" || rua === " " || cidade === '' ||
         bairro === "" || uf === "" || numeroResidencial === ""|| senha === "" ) {
            return alert("PREENCHA TODOS OS CAMPOS")
        }

        const novoUsuario = {
   
            nome: nome,
            cpf: cpf,
            email: email,
            cartaoCredito: cartaoCredito,
            rua: rua,
            cidade: cidade,
            bairro: bairro,
            uf: uf,
            numeroResidencial: numeroResidencial,
            perfil: perfil,
            senha: senha
        }

        if(senha !== senha2){
          return alert("Senhas diferentes. Preencha corretamente!")
        }

        postUsuario(novoUsuario).then().catch();
        alert("USUARIO CADASTRADO COM SUCESSO!")

        setNome("")
        setCpf("")
        setEmail("")
        setCartaoCredito("")
        setRua("")
        setCidade("")
        setBairro("")
        setUf("")
        setNumeroResidencial("")
        setSenha("")
        setSenha2("")
 
    }

  return (
    <>
      <div className="contCadastro container">
        <div className="row">
          <div className="col">
            <p className="text-center slogan">Venha ser Stonks com a gente!</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>

            <div className="row-input1">
              <div class="col-input">
                <input id="usuarioCadastro" className="form-control cadastro-input"  placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
              </div>
            </div>

            <div className="row-input1">
              <div class="col-input">
                <input id="emailCadastro" className="form-control cadastro-input" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
              
              <div className="row-input2">
                <div class="col-input">
                  <input id="cartaoCreditoCadastro" className="form-control cadastro-input" placeholder="Cartao Credito" value={cartaoCredito} onChange={(e) => setCartaoCredito(e.target.value)}/>
                </div>

                <div class="col-input">
                  <input id="cpfCadastro" className="form-control cadastro-input" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                </div>
              </div>
              
              <div className="row-input3">
                <div class="col-input">
                  <input id="cepCadastro" className="form-control cadastro-input" placeholder="CEP"/>
                </div>

                <div class="col-input">
                  <input id="ufCadastro" className="form-control cadastro-input" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)}/>
                </div>
              </div>

              <div className="row-input1">
                <div class="col-input">
                  <input id="cidadeCadastro" className="form-control cadastro-input" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                </div>
              </div>

              <div className="row-input3">
                <div class="col-input">
                  <input id="bairroCadastro" className="form-control cadastro-input" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
                </div>

                <div class="col-input">
                  <input id="numCadastro" className="form-control cadastro-input" placeholder="Nº" value={numeroResidencial} onChange={(e) => setNumeroResidencial(e.target.value)}/>
                </div>
              </div>

              <div className="row-input1">
                <div class="col-input">
                  <input id="senhaCadastro" className="form-control cadastro-input" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                </div>
              </div>

              <div className="row-input1">
                <div class="col-input">
                  <input id="confirmeSenhaCadastro" className="form-control cadastro-input" placeholder="Confirme a Senha" value={senha2} onChange={(e) => setSenha2(e.target.value)}/>
                </div>
              </div>

              <div className="row-input1">
                <div class="col-input">
                  <button type="button" className="btnCadastro" onClick={adicionarUsuario} >Cadastrar</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
