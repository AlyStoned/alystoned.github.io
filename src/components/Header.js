import React from "react";

import ExactNavLink from "./ExactNavLink";
import Brand from "./Brand";
import HeaderMenu from "./HeaderMenu";
import menuItems from "../constants/menu";
import { SITE_ROOT } from "../constants/conf";


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
                                const linkObj = new URL(item.url, SITE_ROOT);
                                return (
                                    <li key={item.title} className={item.classes}>
                                        {linkObj.hash ?
                                            <a href={item.url}>{item.title}</a>
                                            :
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
