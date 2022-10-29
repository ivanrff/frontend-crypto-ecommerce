import "./styles.css";

const Login = () => {
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
                <input id="usuarioCadastro" className="form-control cadastro-input"  placeholder="Nome"/>
              </div>
            </div>

            <div className="row-input1">
              <div class="col-input">
                <input id="emailCadastro" className="form-control cadastro-input" placeholder="E-mail"/>
              </div>
            </div>
              
              <div className="row-input2">
                <div class="col-input">
                  <input id="telefoneCadastro" className="form-control cadastro-input" placeholder="Telefone"/>
                </div>

                <div class="col-input">
                  <input id="cpfCadastro" className="form-control cadastro-input" placeholder="CPF"/>
                </div>
              </div>
              
              <div className="row-input3">
                <div class="col-input">
                  <input id="cepCadastro" className="form-control cadastro-input" placeholder="CEP"/>
                </div>

                <div class="col-input">
                  <input id="ufCadastro" className="form-control cadastro-input" placeholder="UF"/>
                </div>
              </div>

              <div className="row-input1">
                <div class="col-input">
                  <input id="cidadeCadastro" className="form-control cadastro-input" placeholder="Cidade"/>
                </div>
              </div>

              <div className="row-input3">
                <div class="col-input">
                  <input id="bairroCadastro" className="form-control cadastro-input" placeholder="Bairro"/>
                </div>

                <div class="col-input">
                  <input id="numCadastro" className="form-control cadastro-input" placeholder="Nº"/>
                </div>
              </div>

              <div className="row-input1">
                <div class="col-input">
                  <input id="senhaCadastro" className="form-control cadastro-input" placeholder="Senha"/>
                </div>
              </div>

              <div className="row-input1">
                <div class="col-input">
                  <input id="confirmeSenhaCadastro" className="form-control cadastro-input" placeholder="Confirme a Senha"/>
                </div>
              </div>

              <div className="row-input1">
                <div class="col-input">
                  <button type="button" className="btnCadastro" >Cadastrar</button>
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
