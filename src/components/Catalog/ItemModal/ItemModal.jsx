import React from 'react';
import Cross from "../../../img/Cross.svg";
import * as Styled from './StyleItemModal.jsx';

const ItemModal = ({ onClose, ...props }) => {
  return (
    <Styled.PopupOverlay onClick={onClose}>
      <Styled.Background onClick={(e) => e.stopPropagation()}>
        {/* предотвращается распространение события к родительским элементам. Это полезно, когда вы хотите изолировать обработку событий на конкретном элементе, не влияя на другие элементы, которые также могут слушать это событие.*/}
        <Styled.CrossButton onClick={onClose}>
          <img src={Cross} alt=""></img>
        </Styled.CrossButton>
        <Styled.ContentArea>
          <Styled.PicsArea>
            <img src={props.mainImg} alt="MainPicItem" ></img>
            <Styled.SmallPics>
              <Styled.SmallPicImg src={props.addImg1} alt=""></Styled.SmallPicImg>
              <Styled.SmallPicImg src={props.addImg2} alt=""></Styled.SmallPicImg>
              <Styled.SmallPicImg src={props.addImg3} alt=""></Styled.SmallPicImg>
            </Styled.SmallPics>
          </Styled.PicsArea>
          <Styled.TextArea>
            <Styled.MainText>{props.productName}</Styled.MainText>
            <Styled.Description>{props.description}</Styled.Description>
            <Styled.Price>{props.price}</Styled.Price>
            <Styled.AddToCard>В корзину</Styled.AddToCard>
          </Styled.TextArea>
        </Styled.ContentArea>
      </Styled.Background>
    </Styled.PopupOverlay>
  );
};

export { ItemModal };
