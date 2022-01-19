import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ButtonContainer: styled.button`
    width: 100%;
    height: 50px;
    color: ${({theme}) => theme.colors.buttonSecondaryText};
    background: ${({theme}) => theme.colors.secondary};
    border: 1px solid ${({theme}) => theme.colors.secondary};
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
      background: ${({theme}) => theme.colors.tertiary};
      border: 1px solid ${({theme}) => theme.colors.tertiary};
    }
  `,
}