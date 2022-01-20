import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import S from './styled';
import depoiments from '../../utils/Depoiments';
import { useEffect, useState } from 'react';
import { IDepoimentsDto } from '../../dtos/depoimentsDto';

const Testimonial = () => {

  const [ clientsDepoiments, setClientsDepoiments ] = useState<IDepoimentsDto[]>([] as IDepoimentsDto[]);

  useEffect(() => {
    const populateClientsDepoiments = () => {
      setClientsDepoiments(depoiments);
    }
    populateClientsDepoiments();
  }, []);

  const handleVefifyClick = (option: string) => {
    console.log(option)
  }

  return (
    <S.Container>
      <S.Content>
        <S.BoxButtonLeft>
          <S.ButtonSlider onClick={() => handleVefifyClick('previous')}>
          <FiChevronLeft size={60} />
          </S.ButtonSlider>
        </S.BoxButtonLeft>

        <S.BoxBodyDepoiment>
          <S.TextTitleDepoiment>Depoimentos</S.TextTitleDepoiment>
          <S.BoxLineText />

          {clientsDepoiments.map((item) => {
            return (
              <S.BoxDepoimentsVisible key={item.id} active={item.active}>
                <S.BoxImage>
                  <S.ImageAvatar src={item.photo} alt="Avatar"/>
                </S.BoxImage>

                <S.TextDepoimentDescription>
                  {item.depoiment}
                </S.TextDepoimentDescription>
                <S.TextName> {item.name} </S.TextName>
                <S.TextDescription> {item.description} </S.TextDescription>
              </S.BoxDepoimentsVisible>
            )
          })}

          <S.BoxButtons>
            <S.Buttons />
            <S.Buttons />
            <S.Buttons />
            <S.Buttons />
            <S.Buttons />
          </S.BoxButtons>
        </S.BoxBodyDepoiment>

        <S.BoxButtonRight>
          <S.ButtonSlider onClick={() => handleVefifyClick('next')}>
            <FiChevronRight size={60} />
          </S.ButtonSlider>
        </S.BoxButtonRight>
      </S.Content>
    </S.Container>
  );
}

export { Testimonial };