import React from 'react';

import Aux from '../../../hoc/Bantu';;

const orderSummary = (props) => {
    const bumbuSummary = Object.keys(props.bumbu)
        .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey} </span>: {props.bumbu[igKey]}
            </li> );
        });

    return (
        <Aux>
            <h3>Pesanammu</h3>
            <p>Burger yang sangat nikmat dengan bumbu berikut: </p>
            <ul>
                {bumbuSummary}
            </ul>
            <p>Lanjutkan pembayaran ?</p>
        </Aux>
    );

};

export default orderSummary;