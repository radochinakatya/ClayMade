import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 80px;
`;

export const MainTextOnAbout = styled.div`
  text-align: center;
  margin-top: 80px;
`;

export const Box1 = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  height: 153px;
  width: 1200px;
`;

export const Text1 = styled.div`
  font-weight: 400;
  font-size: 26px;
  line-height: 182%;
`;

export const Container2 = styled.div`
  max-width: 1400px;
  margin: 0px auto 80px auto;
  display: grid;
  &> : nth-child {
    grid-template-rows: repeat(2, 800px);
    
  }
  justify-items: end;
  grid-template-columns: repeat(2, 670px);
  grid-gap: 60px 75px;
`;

export const TextContainer1 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 175%;
  text-align: justify;
`;

export const TitleContainer123 = styled.div`
  font-weight: 400;
  font-size: 32px;
`;

export const TextArea = styled.div`
  font-weight: lighter;
  font-size: 24px;
  opacity: 80%;
  & > :first-child {
    margin-bottom: 40px;
    margin-top: 40px;
  }
  & > :last-child {
    margin-top: 40px;
  }
`;

