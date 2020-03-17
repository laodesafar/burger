import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Bantu';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'tranlateY(-100vh)',
                opacity: props.show ? '1' : '0',
                zIndex: props.show ? '500' : '-1'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;