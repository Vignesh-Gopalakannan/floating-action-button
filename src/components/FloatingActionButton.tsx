import { Component, ReactNode, createElement, CSSProperties } from "react";
import { ActionValue, DynamicValue, WebIcon } from "mendix";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { EventEnum } from "../../typings/ReactFabProps";

export interface FloatingActionButtonObject {
    iconText: string;
    buttonIcon: DynamicValue<WebIcon>;
    objectAction: ActionValue;
}
export interface FloatingActionButtonProps {
    mainIcon?: DynamicValue<WebIcon>;
    mainIconText?: string;
    mainIconBg?: string;
    actionIconsBg?: string;
    mainIconColor?: string;
    actionIconsColor?: string;
    event?: EventEnum;
    className?: string;
    style?: CSSProperties;
    objectList?: FloatingActionButtonObject[];
}
enum Event {
    click = "click",
    hover = "hover"
}
export class FloatingActionButton extends Component<FloatingActionButtonProps> {
    render(): ReactNode {
        let {
            mainIcon,
            mainIconText,
            event,
            mainIconBg,
            actionIconsBg,
            className,
            mainIconColor,
            actionIconsColor
        } = this.props;
        let eventType = event === "click" ? Event.click : Event.hover;
        let mainButtonStyles = {
            backgroundColor: mainIconBg,
            color: mainIconColor
        };
        let actionButtonStyles = {
            backgroundColor: actionIconsBg,
            color: actionIconsColor
        };
        return (
            <div className={className}>
                <Fab
                    mainButtonStyles={mainButtonStyles}
                    event={eventType}
                    text={mainIconText}
                    icon={
                        mainIcon?.value?.type === "glyph" ? (
                            <i className={"glyphicon " + mainIcon?.value.iconClass}></i>
                        ) : (
                            <img src={mainIcon?.value?.type === "image" ? mainIcon.value.iconUrl : ""} />
                        )
                    }
                >
                    {this.props.objectList?.map((o: FloatingActionButtonObject) => {
                        return (
                            <Action
                                style={actionButtonStyles}
                                text={o.iconText}
                                onClick={
                                    o.objectAction != undefined
                                        ? o.objectAction.canExecute
                                            ? o.objectAction.execute
                                            : undefined
                                        : undefined
                                }
                            >
                                {o.buttonIcon?.value?.type === "glyph" ? (
                                    <i className={"glyphicon " + o.buttonIcon?.value.iconClass}></i>
                                ) : (
                                    <img src={o.buttonIcon.value?.type === "image" ? o.buttonIcon.value.iconUrl : ""} />
                                )}
                            </Action>
                        );
                    })}
                </Fab>
            </div>
        );
    }
}
