import { Component, ReactNode, createElement } from "react";
import { FloatingActionButton } from "./components/FloatingActionButton";
import { ReactFabContainerProps } from "../typings/ReactFabProps";

import "./ui/ReactFab.css";

export default class ReactFab extends Component<ReactFabContainerProps> {
    render(): ReactNode {
        const objectList = this.props.object.map((o: any) => {
            return {
                iconText: o.iconText,
                buttonIcon: o.buttonIcon,
                objectAction: o.objectAction
            };
        });
        return (
            <FloatingActionButton
                mainIcon={this.props.mainIcon}
                mainIconText={this.props.mainIconText}
                event={this.props.event}
                objectList={objectList}
                className={this.props.class}
                style={this.props.style}
                mainIconBg={this.props.mainBg}
                actionIconsBg={this.props.actionBg}
                mainIconColor={this.props.mainColor}
                actionIconsColor={this.props.actionColor}
            />
        );
    }
}
