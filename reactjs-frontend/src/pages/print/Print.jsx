import { Header } from "../../components/header/Header"
import { PrintStyled } from "./Styled"
import { PrintList } from "./printList/PrintList"

export const Print = () => {
    return(
        <PrintStyled>
           <Header/>
           <PrintList/>
        </PrintStyled>
    )
}