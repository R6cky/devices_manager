import { api } from "../services/api";
import { createContext, useState } from "react";


export const BluebirdContext  = createContext({})

// eslint-disable-next-line react/prop-types
export const BluebirdProvider = ({children}) => {

        const [bluebirds, setBluebird] = useState([])
        const [insertBluebird, setInsertBluebird] = useState({})
        const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false)
        const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)
        const [modalEditIsOpen, setModalEditIsOpen] = useState(false)




        const getBluebirds = async () => {

            try {
                const bluebirds = await api.get('/bluebird')
                setBluebird(bluebirds)
                
            } catch (error) {
                console.log(error)
            }
        }
    
        const createBluebird = async (data) => {

            try {
                const bluebird = await api.post('/bluebird', data)
                setInsertBluebird(bluebird)
                
            } catch (error) {
                console.log(error)
            }
        }



        const updateBluebird = async (data, id) => {

            try {
                const bluebird = await api.patch(`/bluebird/${id}`, data)
                console.log(bluebird)
                
            } catch (error) {
                console.log(error)
            }
        }


        const deleteBluebird = async (id) => {

            try {
                await api.delete(`/bluebird/${id}`)
                //setInsertBluebird(bluebird)
                
            } catch (error) {
                console.log(error)
            }
        }




        const openModalDelete = (id) => {

            localStorage.setItem("idBluebird", id);
            setModalDeleteIsOpen(true);
        }


        const openModalEdit = (id) => {

            localStorage.setItem("idBluebird", id);
            setModalEditIsOpen(true);
        }



    return(
        <BluebirdContext.Provider 
        value={{getBluebirds, bluebirds, createBluebird, insertBluebird, updateBluebird, 
        deleteBluebird, modalCreateIsOpen, setModalCreateIsOpen,setModalEditIsOpen,
        modalEditIsOpen, openModalEdit, modalDeleteIsOpen, setModalDeleteIsOpen, openModalDelete}}>
        {children}
        </BluebirdContext.Provider>
        
    )
}
