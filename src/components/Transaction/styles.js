import styled from "styled-components";

export const Wrapper = styled.div`
  color: purple;
  background: ${({ value }) => (value < 0 ? "wheat" : "lime")};
  border: 1px solid purple;
  padding: 5px 15px;
  margin: 10px 0;
  border-radius: 5px;
`;

Wrapper.displayName = "TransactionWrapper";

export const Icon = styled.span`
  img {
    max-width: 20px;
    margin-right: 5px;
  }
`;

Icon.displayName = "Icon";
