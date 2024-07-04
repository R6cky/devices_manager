import { ModalBluebirdEditStyle } from "./Styled"



export const ModalBluebirdEdit = () => {


    return(
            <ModalBluebirdEditStyle>
                <form action="" className="form-bluebird" onSubmit={handleSubmit}>
                    <div className="btn-close"><span onClick={()=> setModalCreateIsOpen(false)}>X</span></div>
                    <div className="input-container">
                        <input type="text" placeholder="Serial number" onChange={(e)=>{data.serial_name = e.target.value}} />
                        <input type="text" placeholder="Hostname" onChange={(e)=>{data.host_name = e.target.value}}/>
                        <input type="date"  placeholder="Data do reparo" onChange={(e)=>{data.fix_date = e.target.value}}/>
                        <input type="text-area" placeholder="Descrição" onChange={(e)=>{ data.description = e.target.value}} />
                        <input type="submit" className="btn-send" value={"Enviar"}  />
                    </div>
                </form> 
            </ModalBluebirdEditStyle>
            
    )
}