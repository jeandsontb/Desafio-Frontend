import { MenuDefault } from '../../components/MenuDefault';
import S from './styled';
import { Button } from '../../components/Forms/Button';
import { Presentations } from '../../components/Presentations';
import { PresentationsDetails } from '../../components/PresentationsDetails';
import { Quality } from '../../components/Quality';
import { Promotion } from '../../components/Promotion';

const Home = () => {
  return (
    <S.Container>
      <S.BoxBanner>
        <MenuDefault />
        <S.BoxGroup>
          <S.BoxTitle>
            <S.TextInitial>Elegante é ter um</S.TextInitial>
            <S.TextMiddle>ALFAIATE</S.TextMiddle>
            <S.TextFinal>para chamar de seu.</S.TextFinal>
          </S.BoxTitle>
          <S.TextDescription>
            COMPRE HOJE,<strong> PAGUE EM ATÉ 3X <br /> 
            COM 12% DE DESCONTO </strong> E TENHA <br /> 10 MESES PARA CONFECCIONAR!
          </S.TextDescription>
          <S.BoxButton>
            <Button >
                FAÇA JÁ UM ORÇAMENTO
            </Button>
          </S.BoxButton>
        </S.BoxGroup>
      </S.BoxBanner>

      <S.BoxPresentation>
        <Presentations />
      </S.BoxPresentation>

      <S.BoxPresentationDetails>
        <PresentationsDetails />
      </S.BoxPresentationDetails>

      <S.BoxQuality>
        <Quality />
      </S.BoxQuality>

      <S.BoxPromotion>
        <Promotion />
      </S.BoxPromotion>
    </S.Container>
  );
}

export { Home }