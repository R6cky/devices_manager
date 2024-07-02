import { ModalBluebirdEditStyle } from "./Styled"



export const ModalBluebirdDelete = () => {


    return(
            <ModalBluebirdEditStyle>
                <div className="header-delete">
                   <p>Deseja excluir o bluebird? </p>
                </div>
                <button className="btn-delete-yes">Sim</button>
                <button className="btn-delete-no">Não</button>
            </ModalBluebirdEditStyle>
            
    )
}