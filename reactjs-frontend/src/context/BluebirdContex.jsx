import { api } from "../services/api";
import { createContext, useState } from "react";


export const BluebirdContext  = createContext({})

// eslint-disable-next-line react/prop-types
export const BluebirdProvider = ({children}) => {

        const [bluebird, setBluebird] = useState([])

        const getBluebirds = async () => {

            try {
                const bluebird = await api.get('/bluebird')
                console.log(bluebird)
                setBluebird(bluebird)
                
            } catch (error) {
                console.log(error)
            }
        }
    



    return(
        <BluebirdContext.Provider 
        value={{getBluebirds, bluebird}}>
        {children}
        </BluebirdContext.Provider>
        
    )
}
