import { useTheme } from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import S from './styled';
import depoiments from '../../utils/Depoiments';

const Testimonial = () => {

  const theme = useTheme();

  const dp = depoiments[0];

  return (
    <S.Container>
      <S.Content>
        <S.BoxButtonLeft>
          <S.ButtonSlider>
          <FiChevronLeft size={60} />
          </S.ButtonSlider>
        </S.BoxButtonLeft>

        <S.BoxBodyDepoiment>
          <S.TextTitleDepoiment>Depoimentos</S.TextTitleDepoiment>
          <S.BoxLineText />

          <S.BoxImage>
            <S.ImageAvatar src={dp.photo} alt="Avatar"/>
          </S.BoxImage>

          <S.TextDepoimentDescription>
            {dp.depoiment}
          </S.TextDepoimentDescription>
          <S.TextName> {dp.name} </S.TextName>
          <S.TextDescription> {dp.description} </S.TextDescription>

          <S.BoxButtons>
            <S.Buttons />
            <S.Buttons />
            <S.Buttons />
            <S.Buttons />
          </S.BoxButtons>
        </S.BoxBodyDepoiment>

        <S.BoxButtonRight>
          <S.ButtonSlider>
            <FiChevronRight size={60} />
          </S.ButtonSlider>
        </S.BoxButtonRight>
      </S.Content>
    </S.Container>
  );
}

export { Testimonial };