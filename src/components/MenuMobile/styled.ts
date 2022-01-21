import styled from 'styled-components';

interface IMenuProps {
  visible: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.div<IMenuProps>`
    position: relative;
    visibility: hidden;
    display: none;

    @media(max-width:768px) {
      display: flex;
      visibility: ${({visible}) => visible ? 'visible' : 'hidden'};
      flex-direction: column;
      position: fixed;
      width: ${({visible}) => visible ? '100%' : 0};
      height: 100%;
      background-color: ${({theme}) => theme.colors.primary};
      overflow: hidden;
      transition: all ease 0.3s;
      z-index: 8000;
    }    
  `,
  ButtonClose: styled.button`
    @media(max-width:768px) {
      display: flex;
      border: none;
      background-color: transparent;
      position: absolute;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      top: 27px;
      right: 25px;
      color: ${({theme}) => theme.colors.background};
    }    
  `,
  BoxTextMenu: styled.div`
    @media(max-width:768px){
      display: flex;
      flex-direction: column;
      height: 300px;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-top: 54px;
    }    
  `,
  TextMenu: styled.a`
    @media(max-width:768px) {
      text-decoration: none;
      font-family: ${({theme}) => theme.fonts.lato};
      color: ${({theme}) => theme.colors.textGolden};
      font-weight: 300;
      font-size: 26px;
      text-transform: uppercase;
    }    
  `,
  BoxDescription: styled.div`
    @media(max-width:768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 110px;
    }    
  `,
  TextMain: styled.p`
    @media(max-width:768px) {
      font-family: ${({theme}) => theme.fonts.lato};
      color: ${({theme}) => theme.colors.primaryLigh};
      font-weight: 300;
      font-size: 18px;
      margin-top: 8px;
      text-transform: uppercase;
    }    
  `,
  TextSecondary: styled.span`
    @media(max-width:768px) {
      margin-top: 8px;
      font-family: ${({theme}) => theme.fonts.lato};
      color: ${({theme}) => theme.colors.grayRelative};
      font-size: 18px;
      font-weight: 300;
    }    
  `,
}