import { Link } from "react-router-dom";
import "./styles.css";

const Login = () => {
  return (
    <>
      <div className="contLogin container">
        <div className="row mb-3">
          <div className="col">
            <h3 className="text-center">Venha ser Stonks com a gente!</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example1"
                  placeholder="Usuário"
                  class="form-control"
                />
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  placeholder="Senha"
                  class="form-control"
                />
              </div>


              <Link to="/painel">
                <button type="button" className="btnLogin mb-4 " >
                  Entrar
                </button>
              </Link>
              <div class="row mb-4 text-end ">
                 <div class="col ">
                  <a className="recSenha" href="#!">Recuperar senha</a>
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
