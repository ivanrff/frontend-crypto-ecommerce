import "./styles.css";

const Login = () => {
  return (
    <>
      <div className="contCadastro container">
        <div className="row">
          <div className="col">
            <h3 className="text-center">Venha ser Stonks com a gente!</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>

              <div class="row-input">
                <input id="usuarioCadastro" className="form-control cadastro-input"  placeholder="Nome"/>
              </div>

              <div class="row-input">
                <input id="emailCadastro" className="form-control cadastro-input" placeholder="E-mail"/>
              </div>

              <div class="row-input">
                <input id="telefoneCadastro" className="form-control cadastro-input" placeholder="Telefone"/>
              </div>

              <div class="row-input">
                <input id="cpfCadastro" className="form-control cadastro-input" placeholder="CPF"/>
              </div>

              <div class="row-input">
                <input id="cepCadastro" className="form-control cadastro-input" placeholder="CEP"/>
              </div>

              <div class="row-input">
                <input id="cidadeCadastro" className="form-control cadastro-input" placeholder="Cidade"/>
              </div>

              <div class="row-input">
                <input id="bairroCadastro" className="form-control cadastro-input" placeholder="Bairro"/>
              </div>

              <div class="row-input">
                <input id="numCadastro" className="form-control cadastro-input" placeholder="Nº"/>
              </div>

              <div class="row-input">
                <input id="senhaCadastro" className="form-control cadastro-input" placeholder="Senha"/>
              </div>

              <div class="row-input">
                <input id="confirmeSenhaCadastro" className="form-control cadastro-input" placeholder="Confirme a Senha"/>
              </div>

              <button type="button" className="btnCadastro" >Cadastrar</button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
