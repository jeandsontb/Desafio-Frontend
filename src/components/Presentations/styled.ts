import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    display: flex;
    height: 548px;
    overflow: hidden;
  `,
  BoxImage: styled.div`
    width: 566px;
    padding: 54px 98px;
  `,
  ImageTrajar: styled.img`
    width: 370px;
    height: 439px;
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
  `,
  BoxAdjust: styled.div``,
  BoxTitle: styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    align-items: center;
  `,
  TextTitle: styled.h1`
    font-family: ${({theme}) => theme.fonts.cormorant};
    font-weight: 300;
    color: ${({theme}) => theme.colors.primary};
    font-size: 38px;
  `,
  LineSeparator: styled.hr`
    width: 53px;    
    margin-top: 10px;
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
  `,
  BoxImageDetail: styled.div`
    position: absolute;
    width: 156px;
    height: 123px;
    bottom: 100px;
    right: 0px;
  `,
  ImageDetail: styled.img``,
}