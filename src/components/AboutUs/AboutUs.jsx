import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import about from "../../img/AboutUs/aboutus.png";
import * as Styled from './StyleaboutUs.jsx';
import { S } from "../CommonStyles.jsx";
import { Button } from "../Button.jsx";
import about2 from "../../img/AboutUs/about2.png";
import about3 from "../../img/AboutUs/about3.png";
import about4 from "../../img/AboutUs/about4.png";

const About = () => {
  return (
    <div classNameName="AboutUs">
      <Header />

      <S.Maintitle>Наша история</S.Maintitle>
      <S.ImgOnTop>
        <img src={about} width="1400" height="320" alt="about"></img>
      </S.ImgOnTop>

      <Styled.Container>
        <Styled.MainTextOnAbout>
          <Styled.Box1>
            <Styled.Text1>
              <p>
                Сегодня наш интернет-магазин является одним из лучших мест для
                покупки керамических изделий ручной работы. Мы стремимся
                сохранять традиции ручной работы, одновременно внедряя новые
                технологии и идеи. Но с чего же все начиналось?{" "}
              </p>
            </Styled.Text1>
          </Styled.Box1>
        </Styled.MainTextOnAbout>
      </Styled.Container>

      <Styled.Container2>
        <Styled.TextContainer1>
          <Styled.TitleContainer123>Главная цель</Styled.TitleContainer123>

          <Styled.TextArea>
            <p>
              История создания нашего магазина началась со встречи двух
              студенток: Анны и Марии на мастерклассе в одной из мастерских
              Москвы. Они заметили, что хотя рынок керамики был довольно
              большим, большинство изделий были массовыми производствами, не
              имевшими индивидуальности и креативности. Таким образом, их целью
              было создать магазин, где покупатели смогут найти уникальные,
              ручной работы керамические изделия, созданные с любовью и
              вниманием к каждой детали.
            </p>

            <p>
              С этой целью Анна и Мария начали свое производство, где они
              создавали красивые и функциональные предметы, такие как кружки,
              тарелки, вазы, горшки и т.д. Их изделия были уникальными, каждое
              имело свой индивидуальный характер, созданный из натуральных
              материалов, с использованием традиционных техник ручной работы.
            </p>
          </Styled.TextArea>
        </Styled.TextContainer1>

        <img src={about2} width="587" height="800" alt="about2"></img>

        <img src={about3} width="700" height="800" alt="about3"></img>

        <div className="text-container-2">
          <Styled.TitleContainer123>Политика нашего магазина</Styled.TitleContainer123>

          <Styled.TextContainer1>
            <Styled.TextArea>
              <p>
                С первого дня работы магазина, мы старались создать уютную и
                дружелюбную атмосферу, где каждый покупатель может найти
                керамическое изделие, которое отвечает его вкусам и
                потребностям. Наши керамические изделия созданы с любовью и
                старанием, мы используем только самые лучшие материалы и методы
                производства, чтобы обеспечить нашим клиентам высокое качество и
                долговечность.
              </p>
            </Styled.TextArea>
          </Styled.TextContainer1>
        </div>

        <div className="text-container-3">
          <Styled.TitleContainer123>Цены</Styled.TitleContainer123>

          <Styled.TextContainer1>
            <Styled.TextArea>
              <p>
                Мы предлагаем широкий ассортимент продуктов по различным ценам,
                чтобы удовлетворить потребности разных клиентов. Мы ценим
                каждого нашего покупателя и стремимся предоставить доступные
                цены на высококачественную керамику ручной работы.
              </p>

              <p>
                Цены на наши керамические изделия зависят от многих факторов,
                таких как сложность производства, объемы продаж, использованные
                материалы, и другие. Мы всегда стараемся держать цены на наши
                продукты разумными и конкурентоспособными на рынке.
              </p>

              <p>
                В нашем магазине вы можете найти как бюджетные варианты
                керамических изделий, так и более дорогие, уникальные и
                эксклюзивные изделия, которые могут стать прекрасным подарком
                для себя или близких.
              </p>
            </Styled.TextArea>
          </Styled.TextContainer1>
        </div>

        <img src={about4} width="587" height="800" alt="about4"></img>
      </Styled.Container2>
      <Button />
      <Footer />
    </div>
  );
};

export default About;
