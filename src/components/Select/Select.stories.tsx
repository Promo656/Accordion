import {Accordion} from "../Accordion/Accordion";
import {action} from "@storybook/addon-actions";
import React from "react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
};


export const WithValue = () =>
        <Select
            value={"2"}
            onChange={action("Value changed")}
            item={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Vladivostok"}
            ]}
        />

export const WithoutValue = () =>
    <Select
        onChange={action("Value changed")}
        item={[
            {value: "1", title: "Minsk"},
            {value: "2", title: "Moscow"},
            {value: "3", title: "Vladivostok"}
        ]}
    />



