import React from 'react';

import classes from './Burger.module.css';
import BumbuBurger from './BumbuBurger/BumbuBurger';

const burger = props => {
    const transformasiBumbu = Object.keys(props.bumbu)
        .map(buKey => {
            return [...Array( props.bumbu[buKey])].map((_, i) => {
                return <BumbuBurger key={buKey + i} type={buKey} />;
            });
        });
    return (
        <div className={classes.Burger}>
            <BumbuBurger type="bread-top"/>
            {transformasiBumbu}
            <BumbuBurger type="bread-bottom"/>
        </div>
    );
};

export default burger;
