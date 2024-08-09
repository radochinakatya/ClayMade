import styled from "styled-components";

export const CatalogItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  cursor: pointer;
`;

export const CatalogH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  opacity: 70%;
  height: 50px;
  width: 350px;
  margin-top: 10px;
  cursor: pointer;
`;

export const CatalogPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: black;
  text-align: right;
`;

export const CatalogPlusSvg = styled.div`
  height: 44px;
  width: 44px;
  margin-left: 20px;
  cursor: pointer;
`;

export const CatalogLineSvg = styled.div`
  align-items: center;
  margin: 20px auto 0px auto;
  width: 320px;
`;

export const PriceAndPlus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
