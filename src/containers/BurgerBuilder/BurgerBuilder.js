import React, { Component } from "react";

import Aux from "../../hoc/Bantu";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    bumbu: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };
  render() {
    return (
      <Aux>
        <Burger bumbu={this.state.bumbu} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
