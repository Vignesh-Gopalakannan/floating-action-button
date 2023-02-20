/**
 * This file was generated from ReactFab.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, WebIcon } from "mendix";

export type EventEnum = "hover" | "click";

export interface ObjectType {
    iconText: string;
    buttonIcon: DynamicValue<WebIcon>;
    objectAction?: ActionValue;
}

export interface ObjectPreviewType {
    iconText: string;
    buttonIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    objectAction: {} | null;
}

export interface ReactFabContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    mainIcon: DynamicValue<WebIcon>;
    mainIconText: string;
    event: EventEnum;
    object: ObjectType[];
    mainBg: string;
    mainColor: string;
    actionBg: string;
    actionColor: string;
}

export interface ReactFabPreviewProps {
    class: string;
    style: string;
    mainIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    mainIconText: string;
    event: EventEnum;
    object: ObjectPreviewType[];
    mainBg: string;
    mainColor: string;
    actionBg: string;
    actionColor: string;
}
