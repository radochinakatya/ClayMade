import React, { useState } from 'react';
import { Footer } from "../../Footer.jsx";
import { Header } from "../../Header.jsx";
import { ProductCard } from "../ProductCard/ProductCard.jsx";
import { PRODUCTS_MOCK } from "../ItemsModalMock.jsx";
import catalog from "../../../img/Catalog/catalog.png";
import * as Styled from './StyleCatalog.jsx';

import {
  S
} from "../../CommonStyles.jsx";

const Catalog = () => {

  const allProducts = ['Все', 'Тарелки', 'Вазы', 'Кружки'];
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    setSelectedCategory(category);
  };

  const filteredProducts = PRODUCTS_MOCK.filter(
    (product) => selectedCategory === 'Все' || product.category.includes(selectedCategory)
  );

  return (
    <div className="Catalog">
      <Header />
      <S.Maintitle>Каталог</S.Maintitle>
      <S.ImgOnTop>
        <img src={catalog} width="1400" height="320" alt="catalog"></img>
      </S.ImgOnTop>

      <Styled.CatalogNav>
        {allProducts.map((category) => (
          <Styled.FilterLink href="#" isSelected={selectedCategory === category} onClick={(e) => handleCategoryClick(category, e)}> {category} </Styled.FilterLink>
        ))}
      </Styled.CatalogNav>
      <Styled.CatalogList>
      {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            price={product.price}
            description={product.description}
            mainImg={product.mainImg}
            addImg1={product.addImg1}
            addImg2={product.addImg2}
            addImg3={product.addImg3}
          />
        ))}
      </Styled.CatalogList>
      <Footer />
    </div>
  );
};

export default Catalog;
