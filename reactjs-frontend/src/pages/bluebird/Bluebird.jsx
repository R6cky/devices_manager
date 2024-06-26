import { Header } from "../../components/header/Header"
import { BluebirdContext } from "../../context/BluebirdContext"
import { BluebirdStyled } from "./Styled"
import { useContext, useEffect } from "react"


export const Bluebird = () => {

const {bluebirds,getBluebirds} = useContext(BluebirdContext)
const {data} = bluebirds

    useEffect(()=>{
        getBluebirds()
    },[])


    return (
        <BluebirdStyled >
            <Header/>
            {data ?data.map((elem )=> {
                return (
                    <p key={elem.id}>SN: {elem.serial_name} </p>
                ) 
            }): <p>null</p>}
        </BluebirdStyled>
    )
}