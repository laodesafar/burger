import React from 'react';

import classes from './Toolbar.module.css'
import LogoBurger from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <LogoBurger/>
        <nav>
            ...
        </nav>
    </header>

);

export default toolbar;