import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    styleType: {
      control: { type: "radio" },
      options: ["active", "disabled"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Active = Template.bind({});
Active.args = {
  text: "Active",
  styleType: "active",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled",
  styleType: "disabled",
};
