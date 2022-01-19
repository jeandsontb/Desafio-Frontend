import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    position: relative;
    height: 568px;
    width: 100%;
    background-image: url(assets/tailor1.png);
    background-size: cover;
  `,
  BoxBackground: styled.section`
    display: flex;
    position: absolute;
    width: 100%;
    height: 568px;
    background-color: ${({theme}) => theme.colors.backgroundBlue};
    opacity: 0.98;
    padding: 25px 168px;
  `,
  BoxDescription: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  `,
  BoxDescriptionTopic: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
  `,
  BoxSeparator: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 30px;
  `,
  TextTitle: styled.h2`
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.secondary};
    text-transform: uppercase;
    font-size: 53px;
    font-weight: 400;
  `,
  TextDescription: styled.p`
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.secondary};
    margin-top: 40px;
    font-style: italic;
    font-size: 30px;
    margin-bottom: -20px;
  `,
  TextDescriptionTopic: styled.span`
    display: flex;
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.textGrayLight};
    font-weight: 300;
    font-size: 22px;
  `,
  BoxIcon: styled.div`
    height: 20px;
    width: 20px;
    margin-right: 10px;
  `,
  BoxButton: styled.div`
    width: 330px;
  `,
  BoxImage: styled.div`
    width: 330px;
    height: 517px;
  `,
  ImagePromotion: styled.img`
    width: 330px;
    height: 517px;
  `,
}