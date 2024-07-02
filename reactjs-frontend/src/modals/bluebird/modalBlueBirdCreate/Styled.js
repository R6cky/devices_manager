import styled from "styled-components";


export const ModalBluebirdStyle = styled.div`

position: fixed;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
border: solid green;
padding-top: 30px;
background-color: rgba(0,0,0,0.9) ;



.form-bluebird{
        border: solid red;
        width: 38rem;
        max-width: 100%;
        height: 50rem;
        max-height: 100%;
        display: flex;
        flex-direction:column;
        gap: 40px;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        border-radius: 10px;
    }

    input{
        width: 80%;
        height: 3rem;
        font-size: 18px;
    }

    .btn-send{
        cursor: pointer;
    }


`