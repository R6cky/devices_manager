import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { BluebirdStyled } from "./Styled"
import { BluebirdList } from "./bluebirdList/BluebirdList"


export const Bluebird = () => {



    return (
        <BluebirdStyled >
            <Header/>
            <div className="btn-container">
                <span className="btn-insert" > Inserir bluebird</span>
            </div>
            <BluebirdList/>
        <Footer/>
        </BluebirdStyled>
    )
}