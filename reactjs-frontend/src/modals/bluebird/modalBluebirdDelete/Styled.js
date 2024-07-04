import styled from "styled-components";


export const ModalBluebirdDeleteStyle = styled.div`

    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: solid green;
    padding-top: 30px;
    background-color: rgba(0,0,23,0.9) ;
    display: flex;
    align-items:  start;
    justify-content: center;

    .container{
            width: 30rem;
            height: 20rem;
            display: flex;
            flex-direction: column;
            background-color: white;
            padding: 10px;
            border-radius: 10px;

        
        .question-bluebird{
            width: 100%;
            height: 100px;
            color: black;
            font-size: 28px;
            font-style: normal;
            text-align: center;

        }



        .btn-container{
            background-color: white;
            

            .btn-yes{
                border: solid;
                width: 5rem;
                height: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 20px;
                border-radius: 8px;
                cursor: pointer;
            }

            .btn-no{
                border: solid;
                width: 5rem;
                height: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                cursor: pointer;


            }
        }
    }



`