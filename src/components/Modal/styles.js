import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

Backdrop.displayName = "Backdrop";

export const Content = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-width: 80%;
  max-height: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.32);
  background-color: #fff;
  border-radius: 5px;
  transform: translateY(0);
  opacity: 1;
`;

Content.displayName = "Modal Content";
