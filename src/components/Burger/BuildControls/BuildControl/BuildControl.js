import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
    className={classes.Less}
    onClick={props.removed}
    disabled= {props.disabled}>Kurang</button>
    <button
    onClick={props.added}
    className={classes.More}>Tambah</button>
  </div>
);

export default buildControl;
