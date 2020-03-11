import React from "./node_modules/react";

import Aux from "../../hoc/Aux";

const layout = props => (
  <Aux>
    <div> Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
