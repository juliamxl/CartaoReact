import Input from "../inputs";
import { useState } from 'react';
import "./style.css";

function ContainerCampos(props) {

    const [NumeroCartao, setNumeroCartao] = useState('')
    const [NomeTitular, setNomeTitular] = useState('')
    const [Expiracao, setExpiracao] = useState('')
    const [Cvc, setCVC] = useState('')

    function aoSalvar(evento) {
        evento.preventDefault()

        props.aoCartaoCadastrado({
            NumeroCartao,
            NomeTitular,
            Expiracao,
            Cvc
        })

        setNumeroCartao('')
        setNomeTitular('')
        setExpiracao('')
        setCVC('')
    }

    return (
        <form onSubmit={aoSalvar} className="container-campos">
            <Input mask="9999 9999 9999 9999" label="Número do cartão" type="text" valor={NumeroCartao} aoAlterado={valor => setNumeroCartao(valor)} placeholder="Card Number"></Input>
            <Input label="Nome do titular" type="text" valor={NomeTitular} aoAlterado={valor => setNomeTitular(valor)} placeholder="Cardholder Date"></Input>
            <Input mask="99/99" label="Expiração" type="text" aoAlterado={valor => setExpiracao(valor)} valor={Expiracao} placeholder="MM/YYYY"></Input>
            <Input mask="9999" label="CVC" type="text" valor={Cvc} aoAlterado={valor => setCVC(valor)} placeholder="CVC"></Input>
            <button className="btnEnviar">Enviar</button>
        </form>
    );
}

export default ContainerCampos;