import styled from "styled-components";

export const SliderBlock = styled.div`
 display: flex;
 justify-content: center;
`;

export const SliderPics = styled.div`
 width: 1400px;
 height: 540px;
 margin-top: 40px;
 position: relative;
`;

export const SliderImage = styled.img`
 width: 100%;
 height: 100%;
 position: absolute;
 border-radius: 10px;
 transition: opacity 0.5s ease-in-out;
`;