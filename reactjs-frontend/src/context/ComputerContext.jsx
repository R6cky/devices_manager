import { api } from "../services/api";
import { createContext, useState } from "react";


export const ComputerContext  = createContext({})

// eslint-disable-next-line react/prop-types
export const ComputerProvider = ({children}) => {

        const [computers, setComputers] = useState([])
        const [insertComputer, setInsertComputer] = useState({})

        const getComputers = async () => {

            try {
                const requestJson = await  api.get('/computer')
                setComputers(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }
    
        const createComputers = async (data) => {

            try {
                const requestJson = await api.post('/computer', data)
                setInsertComputer(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }



        const updateComputers = async (data, id) => {

            try {
                const requestJson = await api.patch(`/computer/${id}`, data)
                console.log(requestJson)
                
            } catch (error) {
                console.log(error)
            }
        }


        const deleteComputers = async (id) => {

            try {
                await api.delete(`/computer/${id}`)
                
            } catch (error) {
                console.log(error)
            }
        }



        const setIdInLocalStorage = (id) =>{
            localStorage.setItem("id", `${id}`)
        }

    return(
        <ComputerContext.Provider 
        value={{getComputers, computers, createComputers, insertComputer, updateComputers, deleteComputers, setIdInLocalStorage}}>
        {children}
        </ComputerContext.Provider>
        
    )
}
