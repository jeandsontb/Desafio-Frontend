import styled from "styled-components";

export const  TextAreaContainer = styled.div`
  width: 100%;
  height: 76px;
  background-color: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.primaryLigh};
  border-radius: 2px;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  z-index: 5000;

  textarea {
    font-size: 0.75rem;
    font-weight: 400;
    background: transparent;
    font-family: ${({theme}) => theme.fonts.lato};
    color: ${({theme}) => theme.colors.primary};
    font-size: 14px;
    border: 0;
    width: 100%;
    margin: 5px 0 5px 20px;
    outline: 0;
  }
`;