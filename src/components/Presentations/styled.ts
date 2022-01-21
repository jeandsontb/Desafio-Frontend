import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    display: flex;
    height: 548px;
    overflow: hidden;

    @media(max-width:768px) {
      min-height: 1000px;
      padding-bottom: 42px;
      flex-direction: column;
    }
  `,
  BoxImage: styled.div`
    width: 566px;
    padding: 54px 98px;

    @media(max-width:768px) {
      display: none;
    }
  `,
  ImageTrajar: styled.img`
    width: 370px;
    height: 439px;
  `,
  BoxImageMobile: styled.div`
    display: none;

    @media(max-width:768px) {
      width: 100%;
      height: 213px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
    }
  `,
  ImageTrajarMobile: styled.img`
    display: none;

    @media(max-width:768px) {
      display: flex;
      width: 210px;
      height: 213px;
    }
  `,
  BoxDescriptionTrajar: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    height: 439px;
    margin: 54px 37px 54px 0;
    justify-content: space-between;
    padding-right: 55px;
    overflow: hidden;

    @media(max-width:768px) {
      flex-direction: column;
      height: 100%;
      margin: 0;
      align-items: center;
      padding: 24px 23px;
    }
  `,
  BoxAdjust: styled.div``,
  BoxTitle: styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    align-items: center;

    @media(max-width:768px) {
      width: 100%;
      flex-direction: column;
    }
  `,
  TextTitle: styled.h1`
    font-family: ${({theme}) => theme.fonts.cormorant};
    font-weight: 300;
    color: ${({theme}) => theme.colors.primaryLigh};
    font-size: 38px;

    @media(max-width:768px) {
      text-align: center;
    }
  `,
  LineSeparator: styled.hr`
    width: 53px;    
    margin-top: 10px;
    border-color: ${({theme}) => theme.colors.primaryLigh};
  `,
  TextDescriptionOne: styled.p`
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.textGray};
    font-weight: 300;
    font-size: 19px;
    margin: 40px 0;
  `,
  TextObjetive: styled.span`
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.primaryLigh};
    font-size: 24px;
    font-style: italic;
    margin-top: 27px;

    @media(max-width:768px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 26px;
    }
  `,
  BoxButton: styled.div`
    display: flex;
    align-items: flex-end;
    width: 300px;
  `,
  TextAuthor: styled.p`
    font-family: ${({theme}) => theme.fonts.cormorant};
    font-weight: 500;
    font-style: 20px;
    text-align: right;
    color: ${({theme}) => theme.colors.grayRelative};

    @media(max-width:768px) {
      text-align: center;
      margin-top: 11px;
    }
  `,
  BoxImageDetail: styled.div`
    position: absolute;
    width: 156px;
    height: 123px;
    bottom: 100px;
    right: 0px;

    @media(max-width:768px) {
      display: none;
    }
  `,
  ImageDetail: styled.img`
    width: 100%;
    height: 100%;
  `,
}