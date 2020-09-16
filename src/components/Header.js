import React from "react";

import ExactNavLink from "./ExactNavLink";
import Brand from "./Brand";
import HeaderMenu from "./HeaderMenu";
import menuItems from "../constants/menu";


export default () => (
    <header id="app-header">
        <div className="container">
            <div className="header-inner inner-padding">
                <Brand />

                <div className="menu-box">
                    <HeaderMenu items={menuItems} />

                    <nav className="menu main-menu">
                        <ul>
                            {menuItems.map(item => {
                                return (
                                    <li key={item.title} className={item.classes}>
                                        <ExactNavLink to={item.url}>{item.title}</ExactNavLink>}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)
