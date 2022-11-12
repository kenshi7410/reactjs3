import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const {name,image,price,description,quantity} = this.props.selectedItem;
    return (
      <div style={{ boder: "1px solid red", padding: 30 }}>
        <h2>Tên Sản Phẩm : {name} </h2>
        <img alt="" src={image}/>
        <h2>Giá : {price} </h2>
        <h2>Mô Tả : {description}</h2>
        <h2>Số Lượng : {quantity} </h2>
      </div>
    );
  }
}
