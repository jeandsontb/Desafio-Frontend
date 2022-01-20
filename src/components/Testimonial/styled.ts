import styled from 'styled-components';

interface ITestimonialProps {
  active: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    width: 100%;
  `,
  Content: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
    background-image: url(assets/testimonial.png);
    width: 100%;
    height: 608px;
    padding: 62px 150px 84px 150px;
  `,
  BoxButtonLeft: styled.div`
    display: flex;
    width: 80px;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.textGolden};
  `,
  BoxBodyDepoiment: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 760px;
    margin: 0 138px;
  `,
  TextTitleDepoiment: styled.h2`
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.textGrayLight};
    font-weight: 300;
    font-size: 38px;
  `,
  BoxLineText: styled.hr`
    width: 53px;
    border-color: ${({theme}) => theme.colors.lineBlue};
    margin-top: 10px;    
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
  `,
  BoxDepoimentsVisible: styled.div<ITestimonialProps>`
    display: ${({active}) => active ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  `,
  Buttons: styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.textGolden};
    margin-top: 32px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  `,
  BoxButtonRight: styled.div`
    display: flex;
    width: 80px;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.textGolden};
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
    cursor: pointer;
  `,
}