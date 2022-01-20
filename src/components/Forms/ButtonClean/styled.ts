import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ButtonContainer: styled.button`
    width: 100%;
    height: 50px;
    color: ${({theme}) => theme.colors.primaryLigh};
    background: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.primaryLigh};
    font-family: ${({theme}) => theme.fonts.lato};
    font-size: 18px;
    border-radius: 2px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      border: 1px solid ${({theme}) => theme.colors.textGolden};
      color: ${({theme}) => theme.colors.textGolden};
    }
  `,
}