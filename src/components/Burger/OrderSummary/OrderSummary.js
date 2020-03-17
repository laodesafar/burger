import React from 'react';

import Aux from '../../../hoc/Bantu';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const bumbuSummary = Object.keys(props.bumbu)
        .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey} </span>: {props.bumbu[igKey]}
            </li> );
        });

    const convertoRupiah = (angka) => {
        let rupiah = '';
        let angkarev = angka.toString().split('').reverse().join('');
        for(let i = 0; i < angkarev.length; i++) if(i%3 === 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    };

    return (
        <Aux>
            <h3>Pesanammu</h3>
            <p>Burger yang sangat nikmat dengan bumbu berikut: </p>
            <ul>
                {bumbuSummary}
            </ul>
            <p>Lanjutkan pembayaran ?</p>
            <p>Total Harga : <strong>{convertoRupiah(props.totalBayar)}</strong></p>
            <Button btnType="Danger" clicked={props.terbayarkanCancel}>Batalkan</Button>
            <Button btnType="Success" clicked={props.terbayarkanContinue}>Lanjutkan</Button>
        </Aux>
    );

};

export default orderSummary;