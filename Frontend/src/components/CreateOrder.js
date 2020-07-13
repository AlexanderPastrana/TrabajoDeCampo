import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class CreateOrder extends Component {
  state = {
    order_identification_number: "",
    description: "",
    quantity_of_merchandise: "",
    merchandise_weight: "",
    latitude: "",
    longitude: "",
    charging_date: new Date(),
    departure_date: new Date(),
    observations: ""
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/orders");
  }

  onSubmit = async e => {
    e.preventDefault();
    if (this.state.editing) {
      const updateOrder = {
        order_identification_number: this.state.order_identification_number,
        description: this.state.description,
        quantity_of_merchandise: this.state.quantity_of_merchandise,
        merchandise_weight: this.state.merchandise_weight,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        charging_date: this.state.charging_date,
        departure_date: this.state.departure_date,
        observations: this.state.observations
      };
      await axios.put(
        "http://localhost:4000/api/updatedOrder/" + this.state._id,
        updateOrder
      );
    } else {
      const createOrder = {
        order_identification_number: this.state.order_identification_number,
        description: this.state.description,
        quantity_of_merchandise: this.state.quantity_of_merchandise,
        merchandise_weight: this.state.merchandise_weight,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        charging_date: this.state.charging_date,
        departure_date: this.state.departure_date,
        observations: this.state.observations
      };
      axios.post("http://localhost:4000/api/createOrder", createOrder);
    }
    window.location.href = "/listOrders";
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeDate = date => {
    this.setState({ date });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Order</h4>
          <hr />
          <form onSubmit={this.onSubmit}>
            {/* order_identification_number */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Order identification number"
                name="order_identification_number"
                onChange={this.onInputChange}
                value={this.state.order_identification_number}
                required
              ></input>
            </div>
            {/* description */}
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Description"
                onChange={this.onInputChange}
                name="description"
                value={this.state.description}
                required
              ></textarea>
            </div>
            {/* quantity_of_merchandise */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Quantity of merchandise"
                name="quantity_of_merchandise"
                onChange={this.onInputChange}
                value={this.state.quantity_of_merchandise}
                required
              ></input>
            </div>
            {/* merchandise_weight */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Merchandise Weight"
                name="merchandise_weight"
                onChange={this.onInputChange}
                value={this.state.merchandise_weight}
                required
              ></input>
            </div>
            {/* latitude */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Latitude Point"
                name="latitude"
                onChange={this.onInputChange}
                value={this.state.latitude}
                required
              ></input>
            </div>
            {/* longitude */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Longitude Point"
                name="longitude"
                onChange={this.onInputChange}
                value={this.state.longitude}
                required
              ></input>
            </div>
            {/* charging_date */}
            <div className="form-group">
              <DatePicker
                className="form-control"
                placeholder="Date"
                name="charging_date"
                selected={this.state.charging_date}
                onChange={this.onChangeDate}
              ></DatePicker>
            </div>
            {/* departure_date */}
            <div className="form-group">
              <DatePicker
                className="form-control"
                placeholder="Date"
                name="departure_date"
                selected={this.state.departure_date}
                onChange={this.onChangeDate}
              ></DatePicker>
            </div>
            {/* observations */}
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Observations"
                onChange={this.onInputChange}
                name="observations"
                value={this.state.observations}
                required
              ></textarea>
            </div>
            <button className="btn btn-primary" onClick={() => this.onSubmit()}>
              <i className="material-icons">save</i>Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateOrder;
