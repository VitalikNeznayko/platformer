import GameHUD from "./GameHUD";

export default {
  title: "Components/GameHUD",
  component: GameHUD,
  tags: ["autodocs"],
  argTypes: {
    level: { control: "number" },
    collected: { control: "number" },
    time: { control: "number" },
  },
};

const Template = (args) => <GameHUD {...args} />;

export const LevelStart = Template.bind({});
LevelStart.args = {
  level: 1,
  collected: 0,
  total: 10,
  time: 0,
};

export const InProgress = Template.bind({});
InProgress.args = {
  level: 5,
  collected: 7,
  total: 10,
  time: 45,
};

export const TimeRunningOut = Template.bind({});
TimeRunningOut.args = {
  level: 10,
  collected: 9,
  total: 10,
  time: 99,
};
