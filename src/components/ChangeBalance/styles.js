import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  font-size: 42px;
  font-weight: 800;
  color: #d6465b;
  outline: none;
  background-color: #fff;
  border-radius: 25px;
  border: 2px solid #d6465b;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;

  &:hover {
    cursor: pointer;
  }
`;

Button.displayName = "Add Transaction Button";
