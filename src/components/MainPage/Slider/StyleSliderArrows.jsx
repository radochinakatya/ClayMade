import styled from "styled-components";

export const SliderArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const LeftSliderArrow = styled(SliderArrow)`
  left: 20px; /* Расположение слева */
`;

export const RightSliderArrow = styled(SliderArrow)`
  right: 20px; /* Расположение справа */
`;
