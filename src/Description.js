import React, { Component } from "react";

export class Description extends Component {
  render() {
    return (
      <div className="description">
        <h1 class="descriptionn">{this.props.description}</h1>
      </div>
    );
  }
}

export default Description;
