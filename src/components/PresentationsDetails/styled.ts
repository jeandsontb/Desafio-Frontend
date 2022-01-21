import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    display: flex;
    position: relative;
    width: 100%;
    height: 360px;
    background-color: ${({theme}) => theme.colors.backgroundClean};

    @media(max-width:768px) {
      margin-top: 1000px;
      height: auto;
      flex-direction: column-reverse;
    }
  `,
  BoxDetailsRight: styled.div`
    display: flex;
    flex: 1; 
    justify-content: flex-end;

    @media(max-width:768px) {
      flex-direction: column;
      width: 100%;
    }
  `,
  BoxDetailsDescription: styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(assets/tailor.png);
    max-width: 905px;
    height: 360px;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    padding-right: 255px;
    padding-bottom: 55px;

    @media(max-width:768px) {
      flex-direction: column;
      width: 100%;
      padding: 0 23px;
      justify-content: flex-start;
    }
  `,  
  TextDescription: styled.h3`
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.grayRelative};
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 47px;

    @media(max-width:768px) {
      display: flex;
      text-align: center;
      margin-top: 41px;
    }
  `,
  TextInfo: styled.p`
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.primary};
    font-style: italic;
    font-size: 28px;   
    
    @media(max-width:768px) {

    }
  `,
  TextInfoDescription: styled.p`
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.textGolden};
    font-size: 20px;

    @media(max-width:768px) {
      font-size: 16px;
      font-weight: 300;
    }
  `,
  BoxPhotoStyle: styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background};
    width: 218px;
    height: 305px;
    transform: rotate(8deg);
    right: 20.8%;
    top: 30px;
    z-index: 5000;
    box-shadow: 0 4px 10px ${({theme}) => theme.colors.primaryOpacity};

    @media(max-width:768px) {
      display: none;
    }
  `,
  ImageStyle: styled.img`
    width: 288px;
    height: 350px;
    transform: rotate(-7deg);
    margin-top: 8px;
    margin-left: 1px;
  `,
  BoxImageMobile: styled.div`
  display: none;
  position: relative;

  @media(max-width:768px) {
    display: flex;
    width: 100%;
    height: 300px;
  }    
`,
ImagePerfilMobile: styled.img`
  @media(max-width:768px) {
    width: 100%;
    height: 300px;
  }
`,
BoxPhotoShadownMobile: styled.div`
  @media(max-width:768px) {
    position: absolute;
    width: 100%;
    height: 300px;
    background-color: ${({theme}) => theme.colors.primaryOpacity};
  }
`,
BoxPhotoMobileFloat: styled.div`
  @media(max-width:768px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 175px;
    height: 245px;
    background-color: ${({theme}) => theme.colors.background};
    transform: rotate(10deg);
    margin-top: 25px;
    margin-left: 35px;
  }
`,
ImagePhotoMobile: styled.img`
  @media(max-width:768px) {
    transform: rotate(-7deg);
    margin-top: 8px;
  }
`,
  BoxDetailsLeft: styled.div`
    position: relative;
    display: flex;
    width: 313px;
    height: 360px;

    @media(max-width:768px) {
      display: none;
    }
  `,
  ImagePerfil: styled.img`
    width: 313px;
    height: 360px;
  `,
  BoxPhotoShadown: styled.div`
    width: 313px;
    height: 360px;
    background-color: ${({theme}) => theme.colors.primaryOpacity};
    position: absolute;
  `,
}