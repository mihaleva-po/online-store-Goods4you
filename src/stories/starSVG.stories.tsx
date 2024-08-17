import {Meta, StoryFn} from "@storybook/react";
import StarSvg from "../components/svg/starSVG.tsx";

interface Star {
    color: string
}

const meta: Meta<typeof Star> = {
    component: StarSvg,
};

export default meta;

const Template: StoryFn<Star> = (args) => <StarSvg {...args} />;

export const Star = Template.bind({});
Star.args = {
    color: "red"
};
