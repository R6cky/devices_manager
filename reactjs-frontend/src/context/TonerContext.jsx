import { api } from "../services/api";
import { createContext, useState } from "react";


export const TonerContext  = createContext({})

// eslint-disable-next-line react/prop-types
export const TonerProvider = ({children}) => {

        const [toner, setToner] = useState([])
        const [inserttoner, setInsertToner] = useState({})

        const getToner = async () => {

            try {
                const requestJson = await  api.get('/toner')
                setToner(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }
    
        const createToner = async (data) => {

            try {
                const requestJson = await api.post('/toner', data)
                setInsertToner(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }



        const updateToner = async (data, id) => {

            try {
                const requestJson = await api.patch(`/toner/${id}`, data)
                console.log(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }


        const deleteToner = async (id) => {

            try {
                await api.delete(`/toner/${id}`)
                
            } catch (error) {
                console.log(error)
            }
        }



        const setIdInLocalStorage = (id) =>{
            localStorage.setItem("id", `${id}`)
        }

    return(
        <TonerContext.Provider 
        value={{getToner, toner, createToner, inserttoner, updateToner, deleteToner, setIdInLocalStorage}}>
        {children}
        </TonerContext.Provider>
        
    )
}