import S from './styled';

const PresentationsDetails = () => {
  return (
    <S.Container>
      <S.BoxDetailsRight>
        <S.BoxDetailsDescription>
          <S.TextDescription>
          “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável
          em todos os detalhes, desde a costura ao caimento. O Renee tem uma equipe de 
          mestre!”
          </S.TextDescription>
          <S.TextInfo>
            Nelson Garey
          </S.TextInfo>
          <S.TextInfoDescription>
            Advogado | Nelson Garey Advogados Associados
          </S.TextInfoDescription>          
          

          <S.BoxPhotoStyle>
            <S.ImageStyle src="assets/perfil1.png" alt="Renee Trajar" />
          </S.BoxPhotoStyle>
        </S.BoxDetailsDescription>        
      </S.BoxDetailsRight>

      <S.BoxDetailsLeft>
        <S.ImagePerfil src="assets/perfil.png" alt="Renee Trajar" />
        <S.BoxPhotoShadown />
      </S.BoxDetailsLeft>

    </S.Container>
  )
}

export { PresentationsDetails };