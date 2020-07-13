import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

class ListOrders extends Component {
  state = {
    orders: []
  };

  async componentDidMount() {
    this.getOrders();
  }

  getOrders = async () => {
    const res = await axios.get("http://localhost:4000/api/orders");
    this.setState({
      orders: res.data
    });
  };

  deleteOrder = async orderId => {
    await axios.delete("http://localhost:4000/api/deleteOrder/" + orderId);
    this.getOrders();
  };

  render() {
    return (
      <div className="row">
        {this.state.orders.map(order => (
          <div className="col-md-4 p-2" key={order._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>{order.order_identification_number}</h5>
                <Link to={"/edit/" + order._id} className="btn btn-secondary">
                  <i className="material-icons">border_color</i>
                </Link>
              </div>
              <div className="card-body">
                <p>{order._id}</p>
                <p>Description: {order.description}</p>
                <p>Order Id: {order.order_identification_number}</p>
                <p>Quantity Merch: {order.quantity_of_merchandise}</p>
                <p>Weight Merch: {order.merchandise_weight}</p>
                <p>latitude Point: {order.latitude}</p>
                <p>longitude Point: {order.longitude}</p>
                <p>Charging Date: {order.charging_date}</p>
                <p>Departure Date: {order.departure_date}</p>
                <p>Observations: {order.observations}</p>
                <p>{format(order.createdAt)}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteOrder(order._id)}
                >
                  <i className="material-icons">delete</i>Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListOrders;
