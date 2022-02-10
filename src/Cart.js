import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table striped bordered hover>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        <tr>
          <td>1</td>
          <td>{props.state[0].id}</td>
          <td>{props.state[0].name}</td>
          <td>{props.state[0].quan}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </Table>
    </div>
  );
}

function state를props화(state) {
  return {
    state: state,
  };
}
export default connect(state를props화)(Cart);

// export default Cart;
