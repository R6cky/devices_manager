import { Header } from "../../components/header/Header"
import { TasStyled } from "./Styled"
import { TasList } from "./tasList/TasList"

export const Tas = () => {

    return(
        <TasStyled>
            <Header/>
            <TasList/>
        </TasStyled>
    )
}