import React, { Component } from "react";

import Aux from "../../hoc/Bantu";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    bumbu: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };
  render() {
    return (
      <Aux>
        <Burger bumbu={this.state.bumbu} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
