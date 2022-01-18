import S from './styled';
import menuList from '../../utils/ListMenu';

const MenuDefault = () => {
  return (
    <S.Container>
      <S.BoxLogo>
        <S.ImageLogo src="assets/Logo.png" />
      </S.BoxLogo>

      <S.BoxMenu>
        {menuList.map(item => (
          <S.TextMenu key={item.id} >{ item.name }</S.TextMenu>
        ))}
      </S.BoxMenu>
    </S.Container>
  )
}

export { MenuDefault };