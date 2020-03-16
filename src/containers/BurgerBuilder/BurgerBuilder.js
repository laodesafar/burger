import React, { Component } from "react";

import Aux from "../../hoc/Bantu";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const BUMBU_HARGA = {
  salad: 5000,
  cheese: 4000,
  meat: 13000,
  bacon: 7000
};

class BurgerBuilder extends Component {
  state = {
    bumbu: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalHarga: 40000
  };

  addBumbuHandler = type => {
    const oldCount = this.state.bumbu[type];
    const updatedCount = oldCount + 1;
    const updatedBumbu = {
      ...this.state.bumbu
    };
    updatedBumbu[type] = updatedCount;
    const hargaAdditon = BUMBU_HARGA[type];
    const oldPrice = this.state.totalHarga;
    const newPrice = oldPrice + hargaAdditon;
    this.setState({ totalHarga: newPrice, bumbu: updatedBumbu });
  };

  removeBumbuHandler = type => {};

  render() {
    return (
      <Aux>
        <Burger bumbu={this.state.bumbu} />
        <BuildControls bumbuAdded={this.addBumbuHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
