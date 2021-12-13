import Form from ".";

export default {
  title: "Example/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Inputs = Template.bind({});
Inputs.args = {
  onChange: () => {},
};
