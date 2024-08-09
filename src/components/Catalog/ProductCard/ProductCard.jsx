import line from "../../../img/Catalog/line.svg";
import addToCard from "../../../img/Catalog/addtocard.svg";
import { ItemModal } from "../ItemModal/ItemModal.jsx";
import { useEffect, useState } from "react";
import React from "react";
import * as Styled from './StyleProductCard.jsx';

const ProductCard = (props) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]); // Зависимость от состояния modal

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <Styled.CatalogItem onClick={toggleModal}>
      <img src={props.mainImg} alt="item1" height="420"></img>
      <Styled.CatalogLineSvg>
        <img src={line} alt="line"></img>
      </Styled.CatalogLineSvg>
      <Styled.CatalogH2> {props.productName} </Styled.CatalogH2>
      <Styled.PriceAndPlus>
        <Styled.CatalogPrice> {props.price} </Styled.CatalogPrice>
        <Styled.CatalogPlusSvg>
          <img src={addToCard} alt="addtocard"></img>
        </Styled.CatalogPlusSvg>
      </Styled.PriceAndPlus>
      {modal && (
          <ItemModal
            onClose={toggleModal}
            productName={props.productName}
            description={props.description}
            price={props.price}
            mainImg={props.mainImg}
            addImg1={props.addImg1}
            addImg2={props.addImg2}
            addImg3={props.addImg3}
          />
        )}
    </Styled.CatalogItem>
  );
};

export { ProductCard };
