import { useContext, useEffect } from "react"
import { PrintItem } from "./PrintItem/PrintItem"
import { PrintContext } from "../../../context/PrintContext"
import { PrintListStyled } from "./Styled"

export const PrintList = () => {

    const {prints,getPrints} = useContext(PrintContext)
   

    useEffect(()=>{
        getPrints();
    },[])

    return (
        <PrintListStyled >
           {prints.data ? prints.data.map((elem)=>{
            return (
                <PrintItem key={elem.id} Print={elem}/>
            )
           }): <span>null</span>}
        </PrintListStyled>
    )
}