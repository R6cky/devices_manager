import { BluebirdItemStyled } from "./Styled"




export const BluebirdItem = ({bluebird}) => {

    return (
        <BluebirdItemStyled>
                <>
                    <h3 >Serial Number: {bluebird.serial_name} </h3>
                    <h3 >Hostname: {bluebird.host_name} </h3>
                    <h3 >Data de reparo: {bluebird.fix_date} </h3>
                    <h3 >Descrição: {bluebird.description} </h3>
                </>
                </BluebirdItemStyled>
            )
        }