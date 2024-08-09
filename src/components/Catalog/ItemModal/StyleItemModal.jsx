import styled from "styled-components";

export const Background = styled.div`
  background-color: #ffffff;
  border: 3px solid black;
  width: 1200px;
  height: 700px;
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

export const PicsArea = styled.div`
  width: 345px;
  border-radius: 10px;
`;

export const SmallPics = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 103px;
  justify-content: space-between;
  margin-top: 25px;
`;

export const SmallPicImg = styled.img`
 border-radius: 10px;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-left: 100px;
  height: 362px;
`;

export const MainText = styled.div`
  font-size: 32px;
  font-weight: medium;
`;

export const Description = styled.div`
  font-size: 20px;
  font-weight: normal;
  opacity: 70%;
  margin-top: 30px;
`;

export const Price = styled.div`
  font-size: 36px;
  font-weight: medium;
  margin-top: 40px;
`;

export const AddToCard = styled.div`
  font-size: 36px;
  font-weight: medium;
  margin-top: 60px;
  margin-top: auto;
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  align-items: flex-start;
`;