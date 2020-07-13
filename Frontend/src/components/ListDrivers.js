import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

class ListDrivers extends Component {
  state = {
    drivers: []
  };

  async componentDidMount() {
    this.getDrivers();
  }

  getDrivers = async () => {
    const res = await axios.get("http://localhost:4000/api/drivers");
    this.setState({
      drivers: res.data
    });
  };

  deleteDriver = async driverId => {
    await axios.delete("http://localhost:4000/api/deleteDriver/" + driverId);
    this.getDrivers();
  };

  render() {
    return (
      <div className="row">
        {this.state.drivers.map(driver => (
          <div className="col-md-4 p-2" key={driver._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
              <h5>{driver.first_name + " " + driver.last_name}</h5>
                <Link to={"/edit/" + driver._id} className="btn btn-secondary">
                  <i className="material-icons">border_color</i>
                </Link>
              </div>
              <div className="card-body">
                <p>{driver._id}</p>
                <p>First Name: {driver.first_name}</p>
                <p>Last Name: {driver.last_name}</p>
                <p>Doc Type: {driver.document_type}</p>
                <p>Doc Numb: {driver.document_number}</p>
                <p>Phone Numb: {driver.phone_number}</p>
                <p>Driving Lis Numb: {driver.driving_license_number}</p>
                <p>Transit Lis Numb: {driver.transit_license_number}</p>
                <p>SOAT: {driver.soat}</p>
                <p>Mechanical Numb: {driver.mechanical_technical_review}</p>
                <p>
                  Nacional Cargo Regs:{" "}
                  {driver.national_cargo_transportation_registration_card}
                </p>
                <p>
                  Email:{" "}
                  {driver.email}
                </p>
                <p>Plate: {driver.vehicle_plate}</p>
                <p>Date: {driver.date}</p>
                <p>{format(driver.createdAt)}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteDriver(driver._id)}
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

export default ListDrivers;
