import React from "react";

import ExactNavLink from "./ExactNavLink";
import { useClickOutside } from "../hooks/useClickOutside";
import { SITE_ROOT } from "../constants/conf";


const HeaderMenu = (props) => {
    const { items } = props;
    const [dropdownRef, isOpen, setIsOpen] = useClickOutside();
    let menuClasses = 'menu header-menu';
    if (isOpen) menuClasses += ' header-menu-open';

    return (
        <div className={menuClasses} ref={dropdownRef}>
            <div id="header-menu-button"
                 aria-haspopup="true"
                 aria-expanded={isOpen}
                 onClick={() => setIsOpen(!isOpen)}>
                <div className="burger"></div>
            </div>

            <ul className="header-menu-window" role="menu" aria-labelledby="header-menu-button">
                {items.map(item => {
                    const linkObj = new URL(item.url, SITE_ROOT);
                    return (
                        <li key={item.title} role="presentation">
                            {linkObj.hash ?
                                <a href={item.url} role="menuitem">{item.title}</a>
                                :
                                <ExactNavLink to={item.url} role="menuitem">{item.title}</ExactNavLink>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default HeaderMenu;
