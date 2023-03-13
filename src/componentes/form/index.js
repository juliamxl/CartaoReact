import "./style.css";

import InfosCartao from "../infosCartao";

function Form(props) {

    return (
        (props.cartoes.length > 0) ?
            <div className="container-form">
                {props.cartoes.map(cartao =>
                    <InfosCartao
                        numeroCartao={cartao.NumeroCartao}
                        titular={cartao.NomeTitular}
                        expiracao={cartao.Expiracao}
                        CVC={cartao.Cvc}
                    ></InfosCartao>
                )}
            </div> :
            <div className="container-form">
                <InfosCartao
                    numeroCartao= '0000 0000 0000 0000'
                    titular='Laranjinha'
                    expiracao='12/24'
                    CVC='1234'
                />
            </div>
    );
}

export default Form;