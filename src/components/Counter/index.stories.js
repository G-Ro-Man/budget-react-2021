import { Counter } from ".";

export default {
  title: "Example/Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Inputs = Template.bind({});
Inputs.args = {};
