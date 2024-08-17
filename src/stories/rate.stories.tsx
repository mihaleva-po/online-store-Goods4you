import {Meta, StoryFn} from "@storybook/react";
import Rate from "../components/oneProduct/descProduct/rate/rate.tsx";


interface RateProps {
    rating: number | undefined
}

const meta: Meta<typeof RateStory> = {
    component: Rate,
};

export default meta;

const Template: StoryFn<RateProps> = (args) => <Rate {...args} />;

export const RateStory = Template.bind({});
RateStory.args = {
    rating: 3
};
