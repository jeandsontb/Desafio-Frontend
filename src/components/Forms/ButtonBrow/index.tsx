import { ButtonHTMLAttributes } from 'react';

import S from './styled';

const ButtonBrow = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.ButtonContainer {...props} >
      {props.children}
    </S.ButtonContainer>
  )
}

export { ButtonBrow };