import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    width: 100%;
  `,
  Content: styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    background-image: url(assets/testimonial.png);
    width: 100%;
    height: 608px;
  `,
}