import React, { Component, Fragment } from "react";

export default class  AppAccordion extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        return ( 
        <Fragment>
            <p> Copyright &copy; 2020 - { currentYear } Mwirigi Ltd.</p>
        </Fragment>
        );
    }
}
