import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import delivery from "../../img/Delivery/delivery.png";
import { S } from "../CommonStyles.jsx";
import { Button } from "../Button.jsx";
import * as Styled from './StyleDelivery.jsx';

const Delivery = () => {
  return (
    <div className="Delivery">
      <Header />

      <S.Maintitle>Доставка и оплата</S.Maintitle>
      <S.ImgOnTop>
        <img src={delivery} width="1400" height="320" alt="catalog"></img>
      </S.ImgOnTop>

      <Styled.Block1Delivery>
        <div class="leftside_delivery">
          <Styled.TitleDelivery>Доставка по Москве</Styled.TitleDelivery>

          <Styled.MainTextDelivery>
            <p>
              Заказ доставляется на следующий день после оформления. Стоимость
              доставки— 450 р. Доставка день в день рассчитывается
              индивидуально.
            </p>
          </Styled.MainTextDelivery>
        </div>

        <div class="rightside_delivery">
          <Styled.TitleDelivery>Доставка по России</Styled.TitleDelivery>

          <Styled.MainTextDelivery>
            <p>
              Доставка осуществляется «Почтой России» за счет покупателя. После
              оформления заказа мы свяжемся с вами и согласуем детали.
            </p>
          </Styled.MainTextDelivery>
        </div>
      </Styled.Block1Delivery>

      <Styled.Block2Delivery>
        <div class="leftside_delivery">
          <Styled.TitleDelivery>Самовывоз</Styled.TitleDelivery>

          <Styled.MainTextDelivery>
            <p>
              Вы можете забрать заказ самостоятельно в мастерской с понедельника
              по пятницу с 11.00 до 19.00 по адресу: г. Москва, ул.
              Электрозаводская, д. 3, 4 этаж, направо до панно с блюдцами.
            </p>
          </Styled.MainTextDelivery>
        </div>

        <div class="rightside_delivery">
          <Styled.TitleDelivery>Доставка в другие страны</Styled.TitleDelivery>

          <Styled.MainTextDelivery>
            <p>
              Доставка в другие страны доступна, стоимость и время доставки
              зависят от места назначения, варианты доставки предоставляются на
              этапе оформления заказа.
            </p>
          </Styled.MainTextDelivery>
        </div>
      </Styled.Block2Delivery>

      <Button />
      <Footer />
    </div>
  );
};

export default Delivery;
