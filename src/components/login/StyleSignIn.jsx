import styled from "styled-components";

export const Background = styled.div`
  background-color: #ffffff;
  border: 3px solid black;
  width: 1200px;
  height: 800px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

export const CrossButton = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  align-items: flex-start;
  flex-direction: column;
  max-width: 520px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  font-size: 32px;
  font-weight: medium;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background-color: #F0F0F0;
  font-size: 24px;
  color: #7f7f7f;
  height: 50px;
  width: 520px;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
`;

export const PopupContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  max-width: 520px;
  flex-direction: row;
  width: 100%;
  height: 103px;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;
`;

export const ButtonStyled = styled.button`
  height: 75px;
  width: 187px;
  font-weight: normal;
  font-size: 24px;
  background-color: white;
  border: 1.5px solid #282629;
  border-radius: 10px;
  color: #282629;
  cursor: pointer;

  &:hover {
    background-color: #282629;
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit; /* Наследовать цвет родительского элемента */
  }
`;

export const OrdinaryButton = styled.button`
  font-weight: normal;
  font-size: 20px;
  height: 75px;
  opacity: 60%;
  cursor: pointer;
  
  &:hover {
    opacity: 100%;
  }
`;