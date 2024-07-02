import styled  from "styled-components";

export const BluebirdItemStyled = styled.li`
    
    border-radius: 8px;
    width: 21rem;
    height: 28rem;
    max-width: 100%;
    border: solid red;
    padding: 5px;
    margin: 20px;
      
    .item-content{
        border: solid green;
        height: 70%;
    }
   

    .item-buttons{
        display: flex;
        border: solid;
        justify-content: space-evenly;
        align-items: center;

        .edit{
            width: 5rem;
            height: 3rem;
        }

        .remove{
            width: 5rem;
            height: 3rem;
        }
    }

`