import styled from "styled-components";

export const CatalogNav = styled.div`
display: flex;
max-width: 1400px;
margin: 80px auto 80px auto;
font-size: 24px;
`;

export const FilterLink = styled.a`
  margin-right: 60px;
  font-weight: ${({ isSelected}) => isSelected ? 'bold' : 'normal'};
  &#filter {
    ${({ isSelected }) => !isSelected && 'font-weight: bold;'}
  }
`;

export const CatalogList = styled.div`
max-width: 1400px;
margin: 0px auto 80px auto;
display: grid;
grid-template-rows: repeat(4, 580px);
grid-template-columns: repeat(3,400px);
grid-gap: 60px 100px;
`;
