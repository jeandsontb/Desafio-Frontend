import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 45px;
    width: 100%;
    height: 63px;
    background-color: ${({theme}) => theme.colors.background};
    box-shadow: 0px 4px 5px ${({theme}) => theme.colors.textGrayClean};
  `,
  BoxLogo: styled.div``,
  ImageLogo: styled.img`
    width: 78px;
    height: 39px;
  `,
  BoxMenus: styled.div`
    display: flex;
  `,
  BoxTextMenus: styled.div`
    display: flex;
    margin-left: 40px;
    cursor: pointer;
  `,
  TextMenu: styled.span`
    color: ${({theme}) => theme.colors.textMenuNormal};
    font-family: ${({theme}) => theme.fonts.lato};
    font-size: 16px;
    font-weight: 300;
  `,
}