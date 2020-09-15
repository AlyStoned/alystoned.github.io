import React from "react";

import ExactNavLink from "./ExactNavLink";
import routes from "../constants/routes";

import logo from "../images/logo.svg";


export default () => (
    <div className="brand-box">
        <ExactNavLink to={routes.home}>
            <img className="brand" src={logo} alt="logo" />
        </ExactNavLink>
    </div>
)
