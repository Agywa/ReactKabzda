import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion",
    component: Accordion
}
const callback = action("accordion mode change event fired ")
const OnClickCallback = action("some item was clicked ")

export const CollapsedMode = () =>
    <Accordion
        titleValue={"Menu"}
        collapsed={true}
        onChange={callback}
        items={[]}
        onClick={OnClickCallback}
    />
export const UsersUnCollapsedMode = () =>
    <Accordion
        titleValue={"Users"}
        collapsed={false}
        onChange={callback}
        items={[{title: "Dimych", value: 1},
            {title: "Valera", value: 2},
            {title: "Artem", value: 3},
            {title: "Viktor", value: 4}]}
        onClick={OnClickCallback}
    />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion
            titleValue={"Users"}
            collapsed={value}
            onChange={() => setValue(!value)}
            items={[{title: "Dimych", value: 1},
                {title: "Valera", value: 2},
                {title: "Artem", value: 3},
                {title: "Viktor", value: 4}]}
            onClick={(value) => {
                alert(`user with ID ${value} should be happy`)
            }}

        />
    )
}


