import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    display: flex;
    position: relative;
    width: 100%;
    height: 360px;
    background-color: ${({theme}) => theme.colors.backgroundClean};
  `,
  BoxDetailsRight: styled.div`
    display: flex;
    flex: 1; 
    justify-content: flex-end;
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
  `,
  TextDescription: styled.h3`
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.grayRelative};
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 47px;
  `,
  TextInfo: styled.p`
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.primary};
    font-style: italic;
    font-size: 28px;    
  `,
  TextInfoDescription: styled.p`
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.textGolden};
    font-size: 20px;
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
  `,
  ImageStyle: styled.img`
    width: 288px;
    height: 350px;
    transform: rotate(-7deg);
    margin-top: 8px;
    margin-left: 1px;
  `,
  BoxDetailsLeft: styled.div`
    position: relative;
    display: flex;
    width: 313px;
    height: 360px;
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