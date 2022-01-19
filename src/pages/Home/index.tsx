import { MenuDefault } from '../../components/MenuDefault';
import S from './styled';
import { Button } from '../../components/Forms/Button';
import { Presentations } from '../../components/Presentations';

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
            COMPRE HOJE,<strong> PAGUE EM ATÉ 3X {'\n'} 
            COM 12% DE DESCONTO </strong> E TENHA {'\n'} 10 MESES PARA CONFECCIONAR!
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
    </S.Container>
  );
}

export { Home }