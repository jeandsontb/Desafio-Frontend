import styled from 'styled-components';

interface IMenuProps {
  visible: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.div<IMenuProps>`    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 45px;
    width: 100%;
    height: ${({visible}) => visible ? '63px' : '0px'};
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.background};
    box-shadow: 0px 4px 5px ${({theme}) => theme.colors.textGrayClean};
    transition: all ease 0.3s;
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
  TextMenu: styled.span``,
  Link: styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.colors.textMenuNormal};
    font-family: ${({theme}) => theme.fonts.lato};
    font-size: 16px;
    font-weight: 300;
  `,
}