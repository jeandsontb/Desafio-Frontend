import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    display: flex;
    height: 197px;
    justify-content: center;
    align-items: center;
  `,
  BoxQuality: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 436px;
    height: 197px;
  `,
  SeparatorLine: styled.hr`
    width: 1px;
    height: 57px;
    color: ${({theme}) => theme.colors.textGrayLight};
    margin-top: 25px;
  `,
  ImageQuality: styled.img``,
  TextTitle: styled.h2`
    font-weight: 600;
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.primaryLigh};
    text-transform: uppercase;
    margin-top: 9px;
  `,
  TextDescription: styled.p`
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.textGrayStrong};
    font-weight: 300;
    font-size: 14px;
  `,
}