import { BluebirdItemStyled } from "./Styled"
import { BluebirdContext } from "../../context/BluebirdContext"
import { useContext, useEffect } from "react"


export const BluebirdItem = () => {


    const {bluebirds,getBluebirds} = useContext(BluebirdContext)
    const {data} = bluebirds

    useEffect(()=>{
        getBluebirds()
    },[])


    return (
        <BluebirdItemStyled>
           {data ? data.map((elem )=> {
            return (
                <p key={elem.id}>SN: {elem.serial_name} </p>
            ) 
            }): <p>null</p>}
                </BluebirdItemStyled>
            )
        }