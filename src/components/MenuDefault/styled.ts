import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    display: flex;
    width: 100%;
    height: 111px;
    padding: 29px 46px;
    justify-content: space-between;
    align-items: center;
    background-image:linear-gradient(360deg, transparent, ${({theme}) => 
    theme.colors.backgroundBlack} 70%);
  `,
  BoxLogo: styled.div`
    width: 122px;
    height: 55px;
  `,
  ImageLogo: styled.img`
    width: 100%;
    height: 100%;
  `,
  BoxMenu: styled.div`
    display: flex;
  `,
  TextMenu: styled.a`
    text-decoration: none;
    font-family: ${({theme}) => theme.fonts.lato};
    font-size: 16px;
    font-weight: 300;
    color: ${({theme}) => theme.colors.textMenuNormal};
    margin-left: 40px;
    cursor: pointer;
  `,
}