import { VscMenu } from 'react-icons/vsc';
import { MenuDefault } from '../../components/MenuDefault';
import S from './styled';
import { Button } from '../../components/Forms/Button';
import { Presentations } from '../../components/Presentations';
import { PresentationsDetails } from '../../components/PresentationsDetails';
import { Quality } from '../../components/Quality';
import { Promotion } from '../../components/Promotion';
import { ShirtShop } from '../../components/ShirtShop';
import { Testimonial } from '../../components/Testimonial';
import { Contacts } from '../../components/Contacts';
import { Footer } from '../../components/Footer';
import { MenuFixed } from '../../components/MenuFixed';
import { MenuMobile } from '../../components/MenuMobile';
import { useState } from 'react';

const Home = () => {

  const [ buttonOpenMenuMobile, setButtonOpenMenuMobile ] = useState(false);

  const handleOpenMenuMobile = () => {
    setButtonOpenMenuMobile(!buttonOpenMenuMobile);
  }

  return (
    <S.Container>
      <S.BoxBanner id="home">
        <MenuDefault /> 
        <MenuMobile 
          openButtonMenu={buttonOpenMenuMobile} 
          closeButtonMenu={setButtonOpenMenuMobile}
        />  

        <S.BoxButtonMobile 
          onClick={handleOpenMenuMobile}
        >
          <VscMenu size={35} />
        </S.BoxButtonMobile>    

        <S.BoxLogo>
          <S.ImageLogo src="assets/Logo.png" alt="logo" />
        </S.BoxLogo>

        <S.BoxGroup>          

          <S.BoxTitle>
            <S.TextInitial>Elegante é ter um</S.TextInitial>
            <S.TextMiddle>ALFAIATE</S.TextMiddle>
            <S.TextFinal>para chamar de seu.</S.TextFinal>
          </S.BoxTitle>
          <S.TextDescription>
            COMPRE HOJE,<strong> PAGUE EM ATÉ 3X  
            COM 12% DE DESCONTO </strong> E TENHA  10 MESES PARA CONFECCIONAR!
          </S.TextDescription>
          <S.BoxButton>
            <Button >
                FAÇA JÁ UM ORÇAMENTO
            </Button>
          </S.BoxButton>
        </S.BoxGroup>
      </S.BoxBanner>

      <S.BoxPresentation id="busines">
        <Presentations />
      </S.BoxPresentation>

      <S.BoxPresentationDetails>
        <PresentationsDetails />
      </S.BoxPresentationDetails>

      <S.BoxQuality id="tuxedo">
        <Quality />
      </S.BoxQuality>

      <S.BoxPromotion>
        <Promotion />
      </S.BoxPromotion>

      <S.BoxShirtShop id="shirt" >
        <ShirtShop />
      </S.BoxShirtShop>

      <S.BoxTestimonial id="testimonial">
        <Testimonial />
      </S.BoxTestimonial>

      <S.Contact id="contact">
        <Contacts />
      </S.Contact>

      <S.Footer>
        <Footer />
      </S.Footer>

      <S.MenuFixed>
        <MenuFixed />
      </S.MenuFixed>
    </S.Container>
  );
}

export { Home }