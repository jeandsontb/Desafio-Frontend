import styled from 'styled-components';

interface ITestimonialProps {
  active: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    position: relative;
    display: flex;
    background-image: url(assets/testimonial.png);    
    background-color: ${({theme}) => theme.colors.backgroundBlue};    
    width: 100%;
    height: 608px;

    @media(max-width:768px) {
      width: 100%;
      height: 782px;
      flex-direction: column;
      padding: 0 23px;
      background-size: cover;
    }
  `,
  Content: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;     
    padding: 62px 80px 84px 80px;

    @media(max-width:768px) {
      width: 100%;
      flex-direction: column;
      padding: 0;
    }
  `,
  BoxButtonLeft: styled.div<{direction: boolean}>`
    display: flex;
    width: 80px;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.textGolden};

    @media(max-width:768px) {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 60px;
      bottom: 6px;
    }
  `,
  BoxBodyDepoiment: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    justify-content: space-between;

    @media(max-width:768px) {
      width: 100%;
      padding: 0;
    }
  `,
  BoxTitleDepoiment: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65px;

    @media(max-width:768px) {
      margin-top: 20px;
    }
  `,
  TextTitleDepoiment: styled.h2`
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.textGrayLight};
    font-weight: 300;
    font-size: 38px;
    margin-top: 30px;
  `,
  BoxLineText: styled.hr`
    width: 53px;
    border-color: ${({theme}) => theme.colors.lineBlue};
    margin-top: 10px;    
  `,
  BoxSeparatorMobile: styled.div`
    align-items: center;

    @media(max-width:768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  `,
  BoxImage: styled.div`
    margin-top: 46px;
    width: 121px;
    height: 121px;
    border-radius: 61px;
    overflow: hidden;
    border: 2px solid ${({theme}) => theme.colors.textGolden};
    margin-bottom: 16px;
  `,
  ImageAvatar: styled.img`
    width: 100%;
    height: 100%;
  `,
  TextDepoimentDescription: styled.p`
    font-family: unset${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.textGrayClean};
    font-weight: 300;
    font-style: italic;
    font-size: 26px;
    text-align: center;

    @media(max-width:768px) {
      font-size: 24px;
    }
  `,
  BoxDepoimentsVisible: styled.div<ITestimonialProps>`
    display: ${({active}) => active ? 'flex' : 'none'};
    min-height: 400px;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    transition: all ease 0.3s;

    @media(max-width:768px) {
      width: 100%;
      flex: 1;
    }
  `,
  TextName: styled.p`
    margin-top: 14px;
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.textGolden};
    font-size: 20px;
  `,
  TextDescription: styled.p`
    margin-top: 3px;
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.textGrayActive};
    font-size: 14px;
    font-weight: 300;
  `,
  BoxButtons: styled.div`
    display: flex;

    @media(max-width:768px) {
      margin-bottom: 40px;
    }
  `,
  Buttons: styled.div<ITestimonialProps>`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({theme, active}) => 
      active ? theme.colors.primaryLigh : 'transparent'};
    border: 1px solid ${({theme}) => theme.colors.primaryLigh};
    margin-top: 32px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  `,
  BoxButtonRight: styled.div<{direction: boolean}>`
    display: flex;
    width: 80px;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.textGolden};

    @media(max-width:768px) {
      position: absolute;
      width: 30px;
      height: 30px;
      right: 60px;
      bottom: 6px;
    }
  `,
  ButtonSlider: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.textGolden};
    background-color: transparent;
    border: none;
    width: 60px;
    height: 60px;
    margin-top: 130px;
    cursor: pointer; 
    
    @media(max-width:768px) {
      position: absolute;
      bottom: 10px;
    }
  `,
}