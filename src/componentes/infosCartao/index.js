import ccIcon from "./cc-icon.svg";
import ccVisa from "./cc-visa.svg";
import ccChip from "./cc-chip.svg";

function InfosCartao({numeroCartao, titular, expiracao,CVC}) {

    return (
    <>
        <div className="ccIcon-operadora">
            <img src={ccIcon}></img>
            <img src={ccVisa}></img>
        </div>
        <div className="numeroCartao-titular">
            <p className="numeroCartao" numeroCartao={numeroCartao}>{numeroCartao}</p>
            <p className="titular" titular={titular}>{titular}</p>
        </div>
        <div className="expiracao-CVC">
            <div className="expiracao">
                <p>Expiração</p>
                <p expiracao={expiracao}>{expiracao}</p>
            </div>
            <div className="CVC">
                <p>CVC</p>
                <p CVC={CVC}>{CVC}</p>
            </div>
            <img src={ccChip}></img>
        </div>
    </>
    )

}

export default InfosCartao;