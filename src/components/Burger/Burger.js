import React from 'react';

import classes from './Burger.module.css';
import BumbuBurger from './BumbuBurger/BumbuBurger';

const burger = props => {
    return (
        <div className={classes.Burger}>
            <BumbuBurger type="bread-top"/>
            <BumbuBurger type="cheese"/>
            <BumbuBurger type="meat"/>
            <BumbuBurger type="bread-bottom"/>
        </div>
    );
};

export default burger;
