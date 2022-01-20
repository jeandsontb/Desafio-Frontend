import { ButtonHTMLAttributes } from 'react';

import S from './styled';

const ButtonClean = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.ButtonContainer {...props} >
      {props.children}
    </S.ButtonContainer>
  )
}

export { ButtonClean };