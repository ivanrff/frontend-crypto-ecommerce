const ResumoAtividades = (props) => {
    return (
        <>
            <div className="resumo-atividades">
                <div className="resumo-moeda">{props.moeda}</div>
                <div className="resumo-qtd">{props.qtd}</div>
                <div className="resumo-data">{props.data}</div>
            </div>
        </>
    )
}

export default ResumoAtividades;