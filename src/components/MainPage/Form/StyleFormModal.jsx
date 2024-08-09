import styled from "styled-components";

export const Background = styled.div`
 background-color: #ffffff;
 border: 3px solid black;
 width: 1000px;
 height: 440px;
 border-radius: 20px;
 display: flex;
 flex-direction: column; 
 justify-content: center; 
 align-items: center; 
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
`;

export const PopupOverlay = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: rgba(0, 0, 0, 0.5);
`;


export const CrossButton = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
