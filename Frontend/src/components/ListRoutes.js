import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

class ListRoutes extends Component {
  state = {
    routes: []
  };

  async componentDidMount() {
    this.getRoutes();
  }

  getRoutes = async () => {
    const res = await axios.get("http://localhost:4000/api/routes");
    this.setState({
      routes: res.data
    });
  };

  deleteRoute = async routeId => {
    await axios.delete("http://localhost:4000/api/deleteRoute/" + routeId);
    this.getRoutes();
  };

  render() {
    return (
      <div className="row">
        {this.state.routes.map(route => (
          <div className="col-md-4 p-2" key={route._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>{route.route_name}</h5>
                <Link to={"/edit/" + route._id} className="btn btn-secondary">
                  <i className="material-icons">border_color</i>
                </Link>
              </div>
              <div className="card-body">
                <p>{route._id}</p>
                <p>Name: {route.route_name}</p>
                <p>Shipping Place: {route.shipping_place}</p>
                <p>Place of delivery: {route.place_of_delivery}</p>
                <p>Date: {route.date}</p>
                <p>{format(route.createdAt)}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteRoute(route._id)}
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

export default ListRoutes;
