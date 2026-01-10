import type { Meta, StoryObj } from "@storybook/react-vite";
import { Whiteboard } from "../Whiteboard";
import React, { useState } from "react";


const meta = { 
    component: Whiteboard ,
    title: 'Design/Whiteboard'
} satisfies Meta<typeof Whiteboard>;
export default meta;

type Story = StoryObj<typeof Whiteboard>;

export const Default: Story = {

    render: () => {
        return (
            <>

                <Whiteboard  />
            </>
        );
    },
};