import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  border: 1px solid purple;
  padding: 5px 15px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
Wrapper.displayName = "FormWrapper";

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
Row.displayName = "FormRow";

export const Input = styled.input`
  border-radius: 3px;
  padding: 5px 10px;
  margin: 10px;
  border: 1px solid #bdbdbd;
  height: 40px;
  outline: none;
`;
Input.displayName = "FormInput";

export const Textarea = styled.textarea`
  border-radius: 3px;
  padding: 5px 10px;
  margin: 10px;
  border: 1px solid #bdbdbd;
  min-height: 40px;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
`;
Textarea.displayName = "FormTextarea";

export const Button = styled.button`
  border-radius: 3px;
  padding: 5px 30px;
  margin: 10px;
  border: 1px solid #bdbdbd;
  min-height: 40px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
Button.displayName = "FormButton";
