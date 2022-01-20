import S from './styled';
import menu from '../../utils/ListMenu';
import { useEffect, useState } from 'react';

const MenuFixed = () => {

  const [ activate, setActivate ] = useState(false);

  useEffect(() => {
    const scrollPage = () => {
      if(window.scrollY > 60) {
        setActivate(true);
      } else {
        setActivate(false);
      }
    }

    window.addEventListener('scroll', scrollPage);
  }, []);

  return (
    <S.Container visible={activate}>
      <S.BoxLogo>
        <S.Link href="#home">
        <S.ImageLogo src="assets/logofooter.png" />
        </S.Link>
      </S.BoxLogo>

      <S.BoxMenus>
        {menu.map(e => {

          return (
            <S.BoxTextMenus>
              <S.TextMenu key={e.id} >
                <S.Link href={`#${e.link}`} > {e.name} </S.Link>
              </S.TextMenu>
            </S.BoxTextMenus>
          )
        })}
      </S.BoxMenus>
    </S.Container>
  )
}

export { MenuFixed };