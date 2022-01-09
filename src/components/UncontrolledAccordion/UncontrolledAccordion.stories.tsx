import React from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: "UncontrolledAccordion",
    component: UncontrolledAccordion
}

export const CollapsedMode = () => <UncontrolledAccordion titleValue={"Menu"}/>
export const UsersUnCollapsedMode = () => <UncontrolledAccordion titleValue={"Users"}/>



