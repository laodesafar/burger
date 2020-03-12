import React from "react";
import classes from "./bumbuBurger.module.css";

const bumbuBurger = props => {
    let bumbu = null;

    switch (props.type) {
        case ('bread-bottom'):
            bumbu = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            bumbu = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seed1}></div>
                    <div className={classes.Seed2}></div>
                </div>
            );
            break;
        case ('meat'):
            bumbu = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            bumbu = <div className={classes.Cheese}></div>;
            break;
        case ('salad'):
            bumbu = <div className={classes.Salad}></div>;
            break;
        case ('bacon'):
            bumbu = <div className={classes.Bacon}></div>;
            break;
        default:
            bumbu = null;
    }

    return bumbu;
};

export default bumbuBurger;
