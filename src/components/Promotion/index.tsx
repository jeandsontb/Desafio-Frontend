import { FiMinus } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { ButtonBrow } from '../Forms/ButtonBrow';
import S from './styled';

const Promotion = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.BoxBackground>
        <S.BoxDescription>
          <S.BoxSeparator>
            <S.TextTitle>Condição Imperdível</S.TextTitle>
            <S.TextDescription>Compre hoje e garanta:</S.TextDescription>
            <S.BoxDescriptionTopic>
              <S.TextDescriptionTopic>
                <S.BoxIcon>
                  <FiMinus size={20} color={theme.colors.textGolden}/>
                </S.BoxIcon>
                12% de desconto e pagamento em até 3x sem juros;
              </S.TextDescriptionTopic>
              <S.TextDescriptionTopic>
                <S.BoxIcon>
                  <FiMinus size={20} color={theme.colors.textGolden}/>
                </S.BoxIcon>
                Até 10 meses para confeccionar sua roupa. Não se preocupe se suas medidas
                aumentaram ou diminuíram, estará sempre elegante;
              </S.TextDescriptionTopic>
              <S.TextDescriptionTopic>
                <S.BoxIcon>
                  <FiMinus size={20} color={theme.colors.textGolden}/>
                </S.BoxIcon>
                Condição muito especial por tempo limitado;
              </S.TextDescriptionTopic>
              <S.TextDescriptionTopic>
                <S.BoxIcon>
                  <FiMinus size={20} color={theme.colors.textGolden}/>
                </S.BoxIcon>
                Poder presentear alguém com uma roupa de alta costura, exclusiva.
              </S.TextDescriptionTopic>
            </S.BoxDescriptionTopic>
          </S.BoxSeparator>

          <S.BoxButton>
            <ButtonBrow >
              Garanta essa condição especial!
            </ButtonBrow>
          </S.BoxButton>
        </S.BoxDescription>


        <S.BoxImage>
          <S.ImagePromotion src="assets/weste.png" alt="Ternos"/>
        </S.BoxImage>
      </S.BoxBackground>
    </S.Container>
  )
}

export { Promotion };