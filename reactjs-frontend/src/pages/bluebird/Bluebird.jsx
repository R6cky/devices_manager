import { useContext } from "react"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { BluebirdStyled } from "./Styled"
import { BluebirdList } from "./bluebirdList/BluebirdList"
import { BluebirdContext } from "../../context/BluebirdContext"
import { ModalBluebird } from "../../modals/bluebird/modalBlueBirdCreate/ModalBluebirdCreate"


export const Bluebird = () => {


    const {modalCreateIsOpen, setModalCreateIsOpen} = useContext(BluebirdContext)


    return (
        <BluebirdStyled >
            <Header/>
            <div className="btn-container">
                <span className="btn-insert" onClick={()=> setModalCreateIsOpen(true)} > Inserir bluebird</span>
            </div>
            <BluebirdList/>
        <Footer/>
        {modalCreateIsOpen ? <ModalBluebird/> : null}
        </BluebirdStyled>
    )
}