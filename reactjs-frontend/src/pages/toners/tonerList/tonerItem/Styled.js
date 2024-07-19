import styled from "styled-components";

export const TonerItemStyled = styled.li`
  border-radius: 8px;
  width: 21rem;
  height: 25rem;
  max-width: 100%;
  padding: 5px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(2, 0, 36);
  padding: 20px;
  -webkit-box-shadow: 4px 14px 26px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 14px 26px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 14px 26px 0px rgba(0, 0, 0, 0.75);
  animation: myAnim 2s ease 0s 1 normal forwards;

  .item-content {
    height: 70%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid white 0.5px;
    border-radius: 8px;
    padding: 10px;

    h3 {
      font-size: 3rem;
      max-width: 100%;
      color: black;
    }

    .toner-quant {
      font-size: 5rem;
      font-weight: bold;
      color: black;
    }
  }

  .remove-edit-container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;

    .btn-edit {
      cursor: pointer;
      color: white;
    }

    .btn-remove {
      cursor: pointer;
      color: white;
    }
  }

  @keyframes myAnim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .item-buttons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .edit {
      width: 5rem;
      height: 3rem;
    }

    .remove {
      width: 5rem;
      height: 3rem;
    }
  }
`;
