import { useContext, useEffect } from "react"
import { ComputerItem } from "./computerItem/ComputerItem"
import { ComputerContext } from "../../../context/ComputerContext"
import { ComputerListStyled } from "./Styled"

export const ComputerList = () => {

    const {computers,getComputers} = useContext(ComputerContext)
   

    useEffect(()=>{
        getComputers();
    },[])

    return (
        <ComputerListStyled >
           {computers.data ? computers.data.map((elem)=>{
            return (
                <ComputerItem key={elem.id} computer={elem}/>
            )
           }): <span>null</span>}
        </ComputerListStyled>
    )
}