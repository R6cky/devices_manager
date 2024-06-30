import { api } from "../services/api";
import { createContext, useState } from "react";


export const TasContext  = createContext({})

// eslint-disable-next-line react/prop-types
export const TasProvider = ({children}) => {

        const [tas, setTas] = useState([])
        const [insertTas, setInsertTas] = useState({})

        const getTas = async () => {

            try {
                const requestJson = await  api.get('/tas')
                setTas(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }
    
        const createTas = async (data) => {

            try {
                const requestJson = await api.post('/tas', data)
                setInsertTas(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }



        const updateTas = async (data, id) => {

            try {
                const requestJson = await api.patch(`/tas/${id}`, data)
                console.log(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }


        const deleteTas = async (id) => {

            try {
                await api.delete(`/tas/${id}`)
                
            } catch (error) {
                console.log(error)
            }
        }



        const setIdInLocalStorage = (id) =>{
            localStorage.setItem("id", `${id}`)
        }

    return(
        <TasContext.Provider 
        value={{getTas, tas, createTas, insertTas, updateTas, deleteTas, setIdInLocalStorage}}>
        {children}
        </TasContext.Provider>
        
    )
}
