import { useContext } from "react"
import { BluebirdContext } from "../../../context/BluebirdContext"
import { ModalBluebirdDeleteStyle } from "./Styled"



export const ModalBluebirdDelete = () => {

const {deleteBluebird, setModalDeleteIsOpen} = useContext(BluebirdContext)


    const idBluebird = localStorage.getItem("idBluebird")

    console.log(idBluebird)

    return(
            <ModalBluebirdDeleteStyle>
                <div className="container">
                    <p>Deseja realmente excluir o bluebird? </p>
                    <div className="btn-container">
                        <span className="btn-yes"onClick={()=>deleteBluebird(idBluebird)}>Sim</span>
                        <span className="btn-no" onClick={()=> setModalDeleteIsOpen(false)}>Não</span>
                    </div>
                </div>
                
            </ModalBluebirdDeleteStyle>
    )
}