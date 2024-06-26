import { useContext } from "react"
import { BluebirdContext } from "../../context/BluebirdContext"
import { ModalBluebirdStyle } from "./Styled"



export const ModalBluebird = () => {

const {createBluebird} = useContext(BluebirdContext)


    const data = {
        serial_name: '',
        host_name: '',
        data_reparo: '',
        fix_date: '',
        description: '',
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        createBluebird(data)      
    }




    return(
            <ModalBluebirdStyle>
                <form action="" className="form-bluebird" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Serial number" onChange={(e)=>{data.serial_name = e.target.value}} />
                    <input type="text" placeholder="Hostname" onChange={(e)=>{data.host_name = e.target.value}}/>
                    <input type="time"  placeholder="Data do reparo" onChange={(e)=>{data.fix_date = e.target.value}}/>
                    <input type="text-area" placeholder="Descrição" onChange={(e)=>{data.description = e.target.value}} />
                    <input type="submit" className="send-bluebird" value={"Enviar"}  />
                </form>
            </ModalBluebirdStyle>
    )
}