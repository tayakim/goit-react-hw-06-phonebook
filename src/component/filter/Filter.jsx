import React, { Component } from "react";

export default class Filter extends Component {
  onChangeFilter = (e) => {
    this.props.onChangeFilter(e.target.value);
  };

  render() {
    return (
      <>
        <p>Find contacts by name: </p>
        <input
          placeholder="type name..."
          type="text"
          // value={value}
          onChange={this.onChangeFilter}
        ></input>
      </>
    );
  }
}
