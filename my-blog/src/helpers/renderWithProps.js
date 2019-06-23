import React from "react";

function RenderWithProps(Component, extraProps) {
    return <Component.type {...Component.props} {...extraProps} />;
}

export default RenderWithProps;