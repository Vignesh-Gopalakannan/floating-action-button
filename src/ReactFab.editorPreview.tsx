import { Component, ReactNode, createElement } from "react";
import { FloatingActionButton } from "./components/FloatingActionButton";
import { ReactFabPreviewProps } from "../typings/ReactFabProps";

declare function require(name: string): string;

export class preview extends Component<ReactFabPreviewProps> {
    render(): ReactNode {
        return <FloatingActionButton />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/ReactFab.css");
}
