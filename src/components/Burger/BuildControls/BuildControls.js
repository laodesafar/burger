import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : 'Salad', type: 'salad'},
    {label : 'Bacon', type: 'bacon'},
    {label : 'Cheese', type: 'cheese'},
    {label : 'Meat', type: 'meat'}
];

const convertoRupiah = (angka) => {
    let rupiah = '';
    let angkarev = angka.toString().split('').reverse().join('');
	for(let i = 0; i < angkarev.length; i++) if(i%3 === 0) rupiah += angkarev.substr(i,3)+'.';
	return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
}
const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Harga : <strong>{convertoRupiah(props.harga)}</strong></p>
        {controls.map(ctrl => (
          <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          added={() => props.bumbuAdded(ctrl.type)}
          removed = {() => props.bumbuRemoved(ctrl.type)}
          disabled= {props.disabled[ctrl.type] } />
        ))}

    </div>
);

export default buildControls