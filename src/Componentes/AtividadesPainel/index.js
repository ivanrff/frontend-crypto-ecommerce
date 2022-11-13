import ResumoAtividades from "./ResumoAtividades";
import "./styles.css"

const AtividadesPainel = () => {
    return (
        <>
            <div id="resumo-historico" className="box">
                <div id="resumo-historico-titulo">Atividades Recentes</div>
                <div className="grid-resumo-atividades">
                    <div className="coluna1-resumo-atividades">
                        <ResumoAtividades moeda="PauloCoin" qtd="300,00" data="hoje" />
                        <ResumoAtividades moeda="PauloCoin" qtd="221,00" data="ontem" />
                    </div>
                    <div className="coluna2-resumo-atividades">
                        <ResumoAtividades moeda="CuCoin" qtd="333,33" data="amanha" />
                        <ResumoAtividades moeda="TetaCoin" qtd="232,09" data="agora" />
                    </div>
                </div>
                <div id="resumo-historico-exibirtudo">Exibir tudo</div>
            </div>
        </>
    )
}

export default AtividadesPainel;