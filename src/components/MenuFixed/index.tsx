import S from './styled';
import menu from '../../utils/ListMenu';

const MenuFixed = () => {
  return (
    <S.Container>
      <S.BoxLogo>
        <S.ImageLogo src="assets/logofooter.png" />
      </S.BoxLogo>

      <S.BoxMenus>
        {menu.map(e => {

          return (
            <S.BoxTextMenus>
              <S.TextMenu key={e.id} > {e.name} </S.TextMenu>
            </S.BoxTextMenus>
          )
        })}
      </S.BoxMenus>
    </S.Container>
  )
}

export { MenuFixed };