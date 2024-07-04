import { useContext } from "react"
import { BluebirdContext } from "../../../context/BluebirdContext"
import { ModalBluebirdEditStyle } from "./Styled"



export const ModalBluebirdEdit = () => {

const {createBluebird} = useContext(BluebirdContext)


    





    return(
            <ModalBluebirdEditStyle>
                <div className="container">
                    <p>Deseja realmente excluir o bluebird? </p>
                    <div className="btn-container">
                        <span className="btn-yes">Sim</span>
                        <span className="btn-no">Não</span>
                    </div>
                </div>
                
            </ModalBluebirdEditStyle>
    )
}