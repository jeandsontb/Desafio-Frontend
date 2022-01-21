import { FiMinus } from 'react-icons/fi';

import { Button } from '../Forms/Button';
import S from './styled';

const ShirtShop = () => {
  return (
    <S.Container>
      <S.BoxContent orientation={false}>
        <S.BoxImage orientation={false}>
          <S.ImageShirt src="assets/tailor1.png"/>
          <S.BoxBorder />
        </S.BoxImage>

        <S.BoxDescription orientation={false}>
          <S.BoxSeparatorLine orientation={false}>
            <S.BoxSpacerContent>
              <S.BoxSeparatorButton>
                <S.TextTitle>camisaria</S.TextTitle>
                <S.BoxTitleLine>
                <S.BoxLine>
                  <FiMinus size={20}/>
                </S.BoxLine>
                  confeccionadas artesanalmente
                </S.BoxTitleLine>

                <S.BoxDescriptionInfo>
                  <S.ListAlignDescriptions>
                    <S.ListTextDescription>100% Algodão</S.ListTextDescription>
                    <S.ListTextDescription>Nacionais e Importadas</S.ListTextDescription>
                    <S.ListTextDescription>Monograma</S.ListTextDescription>
                    <S.ListTextDescription>Tradicionais e Esportivas</S.ListTextDescription>
                    <S.ListTextDescription>Slim</S.ListTextDescription>
                    <S.ListTextDescription>Casamentos</S.ListTextDescription>
                  </S.ListAlignDescriptions>
                </S.BoxDescriptionInfo>
              </S.BoxSeparatorButton>

              <S.BoxButton verifyButton={false}>
                <Button type='button' >
                  Quero um orçamento
                </Button>
              </S.BoxButton>
            </S.BoxSpacerContent>
          </S.BoxSeparatorLine>
        </S.BoxDescription>
      </S.BoxContent>

      <S.BoxSeparatorMobile>
        <S.LineSeparator />
      </S.BoxSeparatorMobile>

      <S.BoxContent orientation={true} >
        <S.BoxImage orientation={true}>
          <S.ImageShirt src="assets/tailor2.png"/>
          <S.BoxBorder />
        </S.BoxImage>

        <S.BoxDescription orientation={true}>
          <S.BoxSeparatorLine orientation={true}>
            <S.BoxSpacerContent>
              <S.BoxSeparatorButton>
                <S.TextTitle>alfaiataria</S.TextTitle>
                <S.BoxTitleLine>
                <S.BoxLine>
                  <FiMinus size={20}/>
                </S.BoxLine>
                  Totalmente feito a mão sob medida.
                </S.BoxTitleLine>

                <S.BoxDescriptionInfo>
                  <S.ListAlignDescriptions>
                    <S.ListTextDescription>Fio Super 120 e 130</S.ListTextDescription>
                    <S.ListTextDescription>Ternos e Calças</S.ListTextDescription>
                    <S.ListTextDescription>Lã fria Australiana</S.ListTextDescription>
                    <S.ListTextDescription>Paletós e Smokings</S.ListTextDescription>
                    <S.ListTextDescription>Botões Importados</S.ListTextDescription>
                    <S.ListTextDescription>Sociais e Esportivos</S.ListTextDescription>
                  </S.ListAlignDescriptions>
                </S.BoxDescriptionInfo>
              </S.BoxSeparatorButton>

              <S.BoxButton verifyButton={true}>
                <Button type='button' >
                  Quero um orçamento
                </Button>
              </S.BoxButton>
            </S.BoxSpacerContent>
          </S.BoxSeparatorLine>
        </S.BoxDescription>
      </S.BoxContent>
    </S.Container>
  );
}

export { ShirtShop };