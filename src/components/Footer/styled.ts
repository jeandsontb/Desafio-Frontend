import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.footer`
    display: flex;
    position: relative;
    width: 100%;
    height: 174px;
    border-top: 1px solid ${({theme}) => theme.colors.textGolden};
    padding: 32px 162px 38px 198px;
  `,
  BoxImage: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  `,
  Image: styled.img`
    width: 138px;
    height: 68px;
  `,
  TextCnpj: styled.p`
    font-family: ${({theme}) => theme.fonts.poppins};
    color: ${({theme}) => theme.colors.textGrayMedium};
    font-size: 14px;
    font-weight: 300;
  `,
  BoxAuthorized: styled.div`
    display: flex;
    align-items: flex-end;
  `,
  TextAuthorized: styled.p`
    color: ${({theme}) => theme.colors.textGrayMint};
    font-family: ${({theme}) => theme.fonts.poppins};
    font-weight: 300;
    font-size: 14px;
  `,
  ButtonTop: styled.button`
    position: absolute;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.primary};
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: 0px 2px 5px ${({theme}) => theme.colors.textGrayActive};
    border-radius: 4px;
    right: 49px;
    bottom: 82px;
    cursor: pointer;
  `,
}