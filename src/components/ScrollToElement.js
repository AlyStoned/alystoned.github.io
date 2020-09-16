import React, { useEffect } from "react";
import { useLocation } from "@reach/router";


export default (props) => {
    const location = useLocation();

    useEffect(() => {
        const element = document.getElementById(location.hash.replace("#", ""));
        console.log(location)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [location]);

    return props.children
}
