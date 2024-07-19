import styled from "styled-components";

export const ComputerItemStyled = styled.li`
  border-radius: 8px;
  width: 21rem;
  height: 28rem;
  max-width: 100%;
  padding: 5px;
  margin: 20px;
  background: rgb(2, 0, 36);
  padding: 20px;
  -webkit-box-shadow: 4px 14px 26px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 14px 26px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 14px 26px 0px rgba(0, 0, 0, 0.75);
  animation: myAnim 2s ease 0s 1 normal forwards;

  .item-content {
    border: solid white 0.5px;
    border-radius: 8px;
    padding: 10px;
    height: 70%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

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
    .item-content-sector {
      background-color: yellow;
      color: black;
      padding: 5px;
      border-radius: 8px;
      width: 100%;
    }

    .item-content-type {
      background-color: yellow;
      color: black;
      padding: 5px;
      border-radius: 8px;
      width: 100%;
    }

    .item-content-os {
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
