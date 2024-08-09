import CollageImg from "../../../img/MainPage/Collage.png";
import React from 'react';
import * as Styled from "./StyleCollage.jsx";

const Collage = () => {
  return (
    <Styled.SecondBlock>
      <Styled.Text>
        <h1>О нас</h1>
        <p>
          Наша мастерская по изготовлению керамической посуды отметила свой
          десятый год существования. За это время мы стали одним из лидеров в
          производстве авторской керамики, обеспечивая качественную посуду как
          для частных клиентов, так и для ресторанов и кафе различных городов.
        </p>

        <p>
          Мы гордимся нашими семью коллекциями, каждая из которых отличается
          уникальностью и неповторимым дизайном. Наша посуда сочетает в себе
          элегантность форм, гармонию цветов и практичность использования. Мы
          делаем упор на комфортное использование посуды в повседневной жизни -
          все наши изделия можно легко мыть в посудомоечной машине и
          использовать в микроволновой печи без каких-либо опасений.
        </p>
      </Styled.Text>

      <img src={CollageImg} alt=""></img>
    </Styled.SecondBlock>
  );
};

export { Collage };