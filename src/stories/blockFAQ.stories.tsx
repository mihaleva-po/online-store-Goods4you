import {Meta, StoryFn} from "@storybook/react";
import BlockFaq from "../components/home/FAQ/blockFAQ/blockFAQ.tsx";


interface FAQProps {
    textQues: string,
    textAnswer: string
}

const meta: Meta<typeof FAQStory> = {
    component: BlockFaq,
};

export default meta;

const Template: StoryFn<FAQProps> = (args) => <BlockFaq {...args} />;

export const FAQStory = Template.bind({});
FAQStory.args = {
    textQues: "текст вопроса",
    textAnswer: "текст ответа"
};
