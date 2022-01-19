import styled from 'styled-components';

interface IShirtShopProps {
  orientation: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 98px;
    padding-bottom: 48px;
  `,
  BoxContent: styled.div<IShirtShopProps>`
    display: flex;
    flex-direction: ${({orientation}) => orientation ? 'row-reverse' : 'row'};
    flex: 1;
    margin-bottom: 50px;
  `,
  BoxImage: styled.div<IShirtShopProps>`
    display: flex;
    position: relative;
    width: 550px;
    height: 508px;
    justify-content: center;
    align-items: center;
    margin-left: ${({orientation}) => !orientation ? '155px' : 0};
    margin-right: ${({orientation}) => !orientation ? 0 : '155px'};
  `,
  BoxBorder: styled.div`
    position: absolute;
    border: 1px solid ${({theme}) => theme.colors.primaryLigh};
    width: 100%;
    height:  468px;
  `,
  ImageShirt: styled.img`
    width: 530px;
    height: 488px;
  `,
  BoxDescription: styled.div<IShirtShopProps>`
    display: flex;
    flex: 1;
    padding-top: 60px;
    padding-bottom: 60px;
    max-width: 561px;
    margin-right: ${({orientation}) => !orientation ? '80px' : 0};
    margin-left: ${({orientation}) => !orientation ? 0 : '80px'};
  `,
  BoxSeparatorLine: styled.div<IShirtShopProps>`
    display: flex;
    flex: 1;
    max-width: 561px;
    flex-direction: column;
    border-right: ${({theme, orientation}) => 
    !orientation ? '1px solid '+ theme.colors.textGrayLight : 0};
    border-left: ${({theme, orientation}) => 
    !orientation ? 0 : '1px solid '+ theme.colors.textGrayLight};
    border-top: 1px solid ${({theme}) => theme.colors.textGrayLight};
    border-bottom: 1px solid ${({theme}) => theme.colors.textGrayLight};
  `,
  BoxSpacerContent: styled.div`
    display: flex;
    flex: 1;
    max-width: 561px;
    flex-direction: column;
    justify-content: space-between;
    margin: 57px 15px 37px 60px;
  `,
  BoxSeparatorButton: styled.div`
  `,
  TextTitle: styled.h2`
    font-family: ${({theme}) => theme.fonts.cormorant};
    color: ${({theme}) => theme.colors.primary};
    font-size: 62px;
    font-weight: 300;
    text-transform: uppercase;
  `,
  BoxTitleLine: styled.div`
    display: flex;
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.textGrayLight};
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: -5px;
  `,
  BoxLine: styled.div`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    padding-top: 2px;
  `,
  BoxDescriptionInfo: styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
    padding-left: 45px;
  `,
  ListAlignDescriptions: styled.ul`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  `,
  ListTextDescription: styled.li`
    color: ${({theme}) => theme.colors.tertiary};
    font-family: ${({theme}) => theme.fonts.cormorant};
    font-style: italic;
    font-size: 24px;
    width: 100%;
  `,
  BoxButton: styled.div`
    width: 330px
  `,
}