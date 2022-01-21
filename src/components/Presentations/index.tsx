import { Button } from '../Forms/Button';
import S from './styled';

const Presentations = () => {
  return (
    <S.Container>
      <S.BoxImage>
        <S.ImageTrajar src="assets/crossed.png" />
      </S.BoxImage>

      <S.BoxDescriptionTrajar>
        <S.BoxAdjust>
          <S.BoxTitle>
            <S.TextTitle>Renee Trajar</S.TextTitle>
            <S.LineSeparator />
          </S.BoxTitle>

          <S.BoxImageMobile>
            <S.ImageTrajarMobile src="assets/mobile/trajar.png" />
          </S.BoxImageMobile>

          <S.BoxImageDetail>
            <S.ImageDetail src="assets/aspas.png" />
          </S.BoxImageDetail>
          <S.TextDescriptionOne>
            Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, 
            possuímos profissionais experientes e altamente qualificados.
            <br />
            <br />
            Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo 
            através das medidas tiradas pelo próprio Sr. Renee, no escritório 
            ou residência do cliente.
          </S.TextDescriptionOne>
          <S.TextObjetive>
            “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe 
            satisfação ao usar nossos produtos, aliado a um relacionamento franco 
            e honesto, valorizando o ser humano.”
          </S.TextObjetive>
          <S.TextAuthor>Renee Trajar</S.TextAuthor>
        </S.BoxAdjust>

        <S.BoxButton>
          <Button>
            Agende uma visita!
          </Button>
        </S.BoxButton>
      </S.BoxDescriptionTrajar>
    </S.Container>
  );
}

export { Presentations };