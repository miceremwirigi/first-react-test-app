import React, { Fragment } from "react";

export default function AppFooterFunctionalComponent(props) {
    const currentYear = new Date().getFullYear();
    return ( 
        <Fragment>
            <p>{props.myProperty}</p>
            <p> Copyright &copy; 2020 - { currentYear } Mwirigi Ltd.</p>
        </Fragment>
        );
}