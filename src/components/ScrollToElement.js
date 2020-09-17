import React, { useEffect } from "react";
import { useLocation } from "@reach/router";


export default (props) => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return

        setTimeout(() => {
                const element = document.getElementById(location.hash.replace("#", ""));
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }, 0)
    }, [location]);

    return props.children
}
