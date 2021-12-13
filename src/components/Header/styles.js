import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;

    li {
      a {
        color: ${({ theme }) => theme.linkColor};
      }
    }
  }
`;

Nav.displayName = "Nav";
