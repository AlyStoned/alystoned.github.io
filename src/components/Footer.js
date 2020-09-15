import React from "react";
import { useSiteData } from "react-static";

import Brand from "./Brand";
import { cleanPhone } from "../utils/text";


export default () => {
    const { address, phone, email } = useSiteData();

    return (
        <footer id="app-footer">
            <div className="container">
                <div className="footer-inner inner-padding plain-text">
                    <div className="address-box">{address}</div>

                    <div className="contact-box">
                        <a href={`tel:+1${cleanPhone(phone)}`} className="phone">{phone}</a>
                        {"    •    "}
                        <a href={`mailto:${email}`} className="email">{email}</a>
                    </div>

                    <Brand />
                </div>
            </div>
        </footer>
    )
}
