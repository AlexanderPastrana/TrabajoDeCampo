import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class CreateRoute extends Component {
  state = {
    route_name: "",
    shipping_place: "",
    place_of_delivery: "",
    date: new Date()
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/routes");
  }

  onSubmit = async e => {
    e.preventDefault();
    if (this.state.editing) {
      const updatedRoute = {
        route_name: this.state.route_name,
        shipping_place: this.state.shipping_place,
        place_of_delivery: this.state.place_of_delivery,
        date: this.state.date
      };
      await axios.put(
        "http://localhost:4000/api/updatedRoute/" + this.state._id,
        updatedRoute
      );
    } else {
      const createRoute = {
        route_name: this.state.route_name,
        shipping_place: this.state.shipping_place,
        place_of_delivery: this.state.place_of_delivery,
        date: this.state.date
      };
      axios.post("http://localhost:4000/api/createRoute", createRoute);
    }
    window.location.href = "/listRoutes";
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
          <h4>Create a Route</h4>
          <hr />
          <form onSubmit={this.onSubmit}>
            {/* route_name */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Route Name"
                onChange={this.onInputChange}
                name="route_name"
                value={this.state.route_name}
                required
              />
            </div>
            {/* shipping_place */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Shipping Place"
                onChange={this.onInputChange}
                name="shipping_place"
                value={this.state.shipping_place}
                required
              />
            </div>
            {/* place_of_delivery */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Place of delivery"
                name="place_of_delivery"
                onChange={this.onInputChange}
                value={this.state.place_of_delivery}
                required
              ></input>
            </div>
            {/* date */}
            <div className="form-group">
              <DatePicker
                className="form-control"
                placeholder="Date"
                name="date"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
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

export default CreateRoute;
