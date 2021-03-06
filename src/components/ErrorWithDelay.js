import React, { useState, useEffect } from "react";
import { Field } from "react-final-form";


const DisplayError = ({ delay, active, dirty, error, touched, children }) => {
    const [show, setShow] = useState(false);
    useEffect(
        () => {
            let timeout;
            if (active && error && dirty) {
                timeout = setTimeout(() => setShow(true), delay)
            }
            return () => {
                clearTimeout(timeout)
            }
        },
        [delay, error, active, dirty]
    );

    return error && ((touched && !active) || (touched && !show && active) || show)
        ? children(error)
        : null
};

const ErrorWithDelay = ({ name, children, delay }) => (
    <Field
        name={name}
        subscription={{ active: true, error: true, dirty: true, touched: true }}
    >
        {({ meta: { active, dirty, error, touched } }) => (
            <DisplayError
                delay={delay}
                active={active}
                dirty={dirty}
                error={error}
                touched={touched}
                children={children}
            />
        )}
    </Field>
);

export default ErrorWithDelay
