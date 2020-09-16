import React from "react";
import { useLocation } from "@reach/router";

import { Link } from "./Router";


const isActive = (classes='') => {
    return ({ isCurrent }) => {
        return isCurrent ? { className: `${classes} active`.trim() } : { className: classes }
    }}

const ExactNavLink = props => {
    const location = useLocation();

    return (
        <Link getProps={isActive(props.className)}
              replace={props.to === location.pathname}
              {...props} />
    )}

export default ExactNavLink;
