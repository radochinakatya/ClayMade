import styled from "styled-components";

export const SecondBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & img {
    height: 1000px;
    margin-bottom: 60px;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto 80px auto;
  & h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    opacity: 90%;
  }

  & p {
    line-height: 182%;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    text-align: center;
    max-width: 1076px;
    margin: 40px auto 0 auto;
  }
`;
