import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  padding: 5px 15px;
`;

Wrapper.displayName = "MainWrapper";
