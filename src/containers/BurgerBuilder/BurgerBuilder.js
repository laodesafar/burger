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
    totalHarga: 40000,
    terbayar: false
  };

  updateStateTerbayar(bumbu) {
    const tambah = Object.keys(bumbu)
      .map(igKey => {
        return bumbu[igKey];
      })
      .reduce((tambah, el) => {
        return tambah + el;
      }, 0);
    this.setState({ terbayar: tambah > 0 });
  }

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
    this.updateStateTerbayar(updatedBumbu);
  };

  removeBumbuHandler = type => {
    const oldCount = this.state.bumbu[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedBumbu = {
      ...this.state.bumbu
    };
    updatedBumbu[type] = updatedCount;
    const hargaDeduction = BUMBU_HARGA[type];
    const oldPrice = this.state.totalHarga;
    const newPrice = oldPrice - hargaDeduction;
    this.setState({ totalHarga: newPrice, bumbu: updatedBumbu });
    this.updateStateTerbayar(updatedBumbu);
  };

  render() {
    const disableInfo = {
      ...this.state.bumbu
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger bumbu={this.state.bumbu} />
        <BuildControls
          bumbuAdded={this.addBumbuHandler}
          bumbuRemoved={this.removeBumbuHandler}
          disabled={disableInfo}
          terbayar={this.state.terbayar}
          harga={this.state.totalHarga}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
