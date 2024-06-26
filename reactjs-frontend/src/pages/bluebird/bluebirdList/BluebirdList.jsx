import { useContext, useEffect } from "react"
import { BluebirdContext } from "../../../context/BluebirdContext"
import { BluebirdListStyled } from "./Styled"
import { BluebirdItem } from "./bluebirdItem/BluebirdItem"


export const BluebirdList = () => {

    const {bluebirds,getBluebirds} = useContext(BluebirdContext)
   

    useEffect(()=>{
        getBluebirds()
    },[])

    return (
        <BluebirdListStyled >
           {bluebirds.data ? bluebirds.data.map((elem)=>{
            return (
                <BluebirdItem key={elem.id} bluebird={elem}/>
            )
           }): false}

        </BluebirdListStyled>
    )
}