import styled from "styled-components";

export const PrinterItemStyled = styled.li`
  border-radius: 8px;
  width: 21rem;
  height: 28rem;
  max-width: 100%;
  padding: 5px;
  margin: 20px;
  color: white;
  background: rgb(2, 0, 36);
  padding: 20px;
  animation: myAnim 2s ease 0s 1 normal forwards;

  -webkit-box-shadow: 4px 14px 26px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 14px 26px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 14px 26px 0px rgba(0, 0, 0, 0.75);

  .item-content {
    border: solid white 0.5px;
    border-radius: 8px;
    padding: 10px;
    height: 70%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .item-content-hostname {
      background-color: yellow;
      color: black;
      padding: 5px;
      border-radius: 8px;
      width: 100%;
    }

    .item-content-ip {
      background-color: yellow;
      color: black;
      padding: 5px;
      border-radius: 8px;
      width: 100%;
    }
    .item-brand-and-model {
      background-color: yellow;
      color: black;
      padding: 5px;
      border-radius: 8px;
      width: 100%;
    }

    .item-toner-name {
      background-color: yellow;
      color: black;
      padding: 5px;
      border-radius: 8px;
      width: 100%;
    }
    .item-queue-name {
      background-color: yellow;
      color: black;
      padding: 5px;
      border-radius: 8px;
      width: 100%;
    }

    .item-sector {
      background-color: yellow;
      color: black;
      padding: 5px;
      border-radius: 8px;
      width: 100%;
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

  @keyframes myAnim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
