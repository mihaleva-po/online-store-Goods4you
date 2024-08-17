import DefaultButton, {propsFace} from "../components/ui-components/button/defaultButton.tsx";
import {Meta, StoryFn} from "@storybook/react";

const meta: Meta<typeof DefaultButton> = {
    component: DefaultButton,
};

export default meta;

const Template: StoryFn<propsFace> = (args) => <DefaultButton {...args} />;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
    text: "",
    svg: "",
};
