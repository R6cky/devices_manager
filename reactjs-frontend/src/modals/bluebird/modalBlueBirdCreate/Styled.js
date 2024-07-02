import styled from "styled-components";


export const ModalBluebirdStyle = styled.div`

position: fixed;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
border: solid green;
padding-top: 30px;
background-color: rgba(0,0,23,0.9) ;



    .form-bluebird{
        border: solid white 0.1px;
        width: 38rem;
        max-width: 100%;
        height: 50rem;
        max-height: 100%;
        display: flex;
        flex-direction:column;
        justify-content: start;
        gap: 100px ;
        align-items: center;
        margin: 0 auto;
        border-radius: 10px;
        background-color: rgba(0,0,23,0.9);
    }



    .input-container{
        margin: 0 auto;
        width:80%;
        height: 400px ;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;




        input{
            width: 100%;
            height: 3.5rem;
            font-size: 18px;
        }

        .btn-send{
            cursor: pointer;
        }
    }

    

    .btn-close{
        color: white;
        width: 100%;
        height: 5rem;
        display: flex;
        flex-direction: row-reverse;
        
        span{
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 20px;
            background-color: white;
            color: black;
            cursor: pointer;
        }
    }


`