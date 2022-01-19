import S from './styled';

const Quality = () => {
  return (
    <S.Container>
      <S.BoxQuality>
        <S.ImageQuality src="assets/icon0.png" alt="máquina" />
        <S.TextTitle>Qualidade</S.TextTitle>
        <S.TextDescription>
          Camisaria e Alfaiataria 100% artesanal.
        </S.TextDescription>
      </S.BoxQuality>
      <S.SeparatorLine />
      <S.BoxQuality>
        <S.ImageQuality src="assets/icon1.png" alt="confiança" />
        <S.TextTitle>Confiança</S.TextTitle>
        <S.TextDescription>
          Atendimento personalizado no escritório ou residência..
        </S.TextDescription>
      </S.BoxQuality>
      <S.SeparatorLine />
      <S.BoxQuality>
        <S.ImageQuality src="assets/icon2.png" alt="experiência" />
        <S.TextTitle>Experiência</S.TextTitle>
        <S.TextDescription>
          Tradição e modernidade proporcionando elegância.
        </S.TextDescription>
      </S.BoxQuality>
    </S.Container>
  );
}

export { Quality };