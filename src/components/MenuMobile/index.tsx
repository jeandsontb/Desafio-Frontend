import { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

import S from './styled';
import menu from '../../utils/ListMenu';

interface IMobileProps {
  openButtonMenu: boolean;
  closeButtonMenu: (visible: boolean) => void;
}

const MenuMobile = ({ openButtonMenu, closeButtonMenu }: IMobileProps) => {

  const handleVisibleMenu = () => {
    closeButtonMenu(!openButtonMenu);
  }

  return (
    <S.Container visible={openButtonMenu}>
      <S.ButtonClose onClick={handleVisibleMenu}>
        <MdOutlineClose size={40} />
      </S.ButtonClose>

      <S.BoxTextMenu>
        {menu.map((item) => (
          <S.TextMenu 
            key={item.id} 
            href={`#${item.link}`}
            onClick={handleVisibleMenu}
          >
            {item.name}
          </S.TextMenu>
        ))}
      </S.BoxTextMenu>

      <S.BoxDescription>
        <S.TextMain>telefones</S.TextMain>
        <S.TextSecondary>+55 (11) 3088-0757</S.TextSecondary>
        <S.TextMain>e-mail</S.TextMain>
        <S.TextSecondary>renee@reneetrajar.com.br</S.TextSecondary>
      </S.BoxDescription>
    </S.Container>
  )
}

export { MenuMobile };