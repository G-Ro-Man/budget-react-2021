import { useState } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { Button, Input, Row, Textarea, Wrapper } from "./styles";

const Form = (props) => {
  const [form, setForm] = useState({
    value: "",
    date: new Date().toISOString().substring(0, 10),
    comment: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    props.onChange(form);
    setForm({
      ...form,
      value: "",
      comment: "",
    });
    props.onCloseFormModal();
  };

  const onCahnge = (e) => {
    const { name, value } = e.target;

    console.log("onchange", e);
    setForm({
      ...form,
      [name]: name === "value" ? +value : value,
    });
  };

  return (
    <Wrapper>
      <FormattedMessage id="hello" />
      <form onSubmit={onSubmit}>
        <Row>
          <Input
            type="number"
            name="value"
            placeholder="input sum"
            value={form.value}
            onChange={onCahnge}
          />
          <Input
            type="date"
            name="date"
            value={form.date}
            onChange={onCahnge}
          />
          <Textarea
            type="text"
            name="comment"
            placeholder="input your comment"
            value={form.comment}
            onChange={onCahnge}
          />
          <Button>Submit</Button>
        </Row>
      </form>
    </Wrapper>
  );
};

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
