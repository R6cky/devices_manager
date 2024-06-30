import { useContext, useEffect } from "react"
import { PrintContext } from "../../../context/PrintContext"
import { PrintListStyled } from "./Styled"
import { PrintItem } from "./printItem/PrintItem"

export const PrintList = () => {

    const {prints,getPrints} = useContext(PrintContext)
   

    useEffect(()=>{
        getPrints();
    },[])

    return (
        <PrintListStyled >
           {prints.data ? prints.data.map((elem)=>{
            return (
                <PrintItem key={elem.id} print={elem}/>
            )
           }): <span>null</span>}
        </PrintListStyled>
    )
}