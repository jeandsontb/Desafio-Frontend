import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.div`
    font-family: ${({theme}) => theme.fonts.lato};
  `,
  BoxBanner: styled.section`
    width: 100%;
    height: 630px;
    background-color: ${({theme}) => theme.colors.backgroundBlack};
    background-image: url(assets/Banner.png);
  `,
  BoxGroup: styled.div`
    height: calc(100% - 111px);
    width: 410px;
    margin-left: 98px;
    padding-top: 66px;
  `,
  BoxTitle: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  TextInitial: styled.span`
    font-family: ${({theme}) => theme.fonts.plafair};
    color: ${({theme}) => theme.colors.secondary};
    font-size: 32px;
    font-style: italic;
    font-weight: normal;
  `,
  TextMiddle: styled.h1`
    font-family: ${({theme}) => theme.fonts.plafair};
    color: ${({theme}) => theme.colors.primaryOpacity};
    font-size: 90px;
    font-weight: 400;
    margin-top: -15px;
    margin-bottom: -15px;
  `,
  TextFinal: styled.span`
    font-family: ${({theme}) => theme.fonts.plafair};
    color: ${({theme}) => theme.colors.secondary};
    font-size: 32px;
    font-style: italic;
    font-weight: normal;
    text-align: right;
    margin-right: 8px;
  `,
  TextDescription: styled.h2`
    font-size: 24px;
    color: ${({theme}) => theme.colors.textClean};
    font-family: ${({theme}) => theme.fonts.lato};
    font-weight: 300;
    margin-top: 66px;
  `,
  BoxButton: styled.div`
    margin-top: 25px;
    width: 298px;
  `,
  BoxPresentation: styled.div`
    width: 100%;
  `,
  BoxPresentationDetails: styled.div`
    width: 100%;
  `,
  BoxQuality: styled.div`
    width: 100%;
  `,
  BoxPromotion: styled.div`
    width: 100%;
  `,
  
}