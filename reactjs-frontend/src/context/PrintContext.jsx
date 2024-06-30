import { api } from "../services/api";
import { createContext, useState } from "react";


export const PrintContext  = createContext({})

// eslint-disable-next-line react/prop-types
export const PrintProvider = ({children}) => {

        const [print, setPrint] = useState([])
        const [insertPrint, setInsertPrint] = useState({})

        const getPrint = async () => {

            try {
                const requestJson = await  api.get('/print')
                setPrint(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }
    
        const createPrint = async (data) => {

            try {
                const requestJson = await api.post('/print', data)
                setInsertPrint(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }



        const updatePrint = async (data, id) => {

            try {
                const requestJson = await api.patch(`/print/${id}`, data)
                console.log(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }


        const deletePrint = async (id) => {

            try {
                await api.delete(`/print/${id}`)
                
            } catch (error) {
                console.log(error)
            }
        }



        const setIdInLocalStorage = (id) =>{
            localStorage.setItem("id", `${id}`)
        }

    return(
        <PrintContext.Provider 
        value={{getPrint, print, createPrint, insertPrint, updatePrint, deletePrint, setIdInLocalStorage}}>
        {children}
        </PrintContext.Provider>
        
    )
}
