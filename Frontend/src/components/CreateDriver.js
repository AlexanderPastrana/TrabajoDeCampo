import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class CreateDriver extends Component {
  state = {
    first_name: "",
    last_name: "",
    document_type: "",
    document_number: "",
    phone_number: "",
    driving_license_number: "",
    transit_license_number: "",
    soat: "",
    mechanical_technical_review: "",
    national_cargo_transportation_registration_card: "",
    email: "",
    vehicle_plate: "",
    date: new Date()
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/drivers");
  }

  onSubmit = async e => {
    e.preventDefault();
    if (this.state.editing) {
      const updatedDriver = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        document_type: this.state.document_type,
        document_number: this.state.document_number,
        phone_number: this.state.phone_number,
        driving_license_number: this.state.driving_license_number,
        transit_license_number: this.state.transit_license_number,
        soat: this.state.soat,
        mechanical_technical_review: this.state.mechanical_technical_review,
        national_cargo_transportation_registration_card: this.state
          .national_cargo_transportation_registration_card,
        email: this.state.email,
        vehicle_plate: this.state.vehicle_plate,
        date: this.state.date
      };
      await axios.put(
        "http://localhost:4000/api//api/updatedDriver/" + this.state._id,
        updatedDriver
      );
    } else {
      const createDriver = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        document_type: this.state.document_type,
        document_number: this.state.document_number,
        phone_number: this.state.phone_number,
        driving_license_number: this.state.driving_license_number,
        transit_license_number: this.state.transit_license_number,
        soat: this.state.soat,
        mechanical_technical_review: this.state.mechanical_technical_review,
        national_cargo_transportation_registration_card: this.state
          .national_cargo_transportation_registration_card,
        email: this.state.email,
        vehicle_plate: this.state.vehicle_plate,
        date: this.state.date
      };
      axios.post("http://localhost:4000/api/createDriver", createDriver);
    }
    window.location.href = "/listDrivers";
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
          <h4>Create a Driver</h4>
          <hr />
          <form onSubmit={this.onSubmit}>
            {/* first_name */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Driver first name"
                onChange={this.onInputChange}
                name="first_name"
                value={this.state.first_name}
                required
              ></input>
            </div>
            {/* last_name */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Driver last name"
                onChange={this.onInputChange}
                name="last_name"
                value={this.state.last_name}
                required
              ></input>
            </div>
            {/* document_type */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Document Type"
                name="document_type"
                onChange={this.onInputChange}
                value={this.state.document_type}
                required
              ></input>
            </div>
            {/* document_number */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Document number"
                name="document_number"
                onChange={this.onInputChange}
                value={this.state.document_number}
                required
              ></input>
            </div>
            {/* phone_number */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                name="phone_number"
                onChange={this.onInputChange}
                value={this.state.phone_number}
                required
              ></input>
            </div>
            {/* driving_license_number */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Driving license number"
                name="driving_license_number"
                onChange={this.onInputChange}
                value={this.state.driving_license_number}
                required
              ></input>
            </div>
            {/* transit_license_number */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Transit license number"
                name="transit_license_number"
                onChange={this.onInputChange}
                value={this.state.transit_license_number}
                required
              ></input>
            </div>
            {/* soat */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="SOAT"
                name="soat"
                onChange={this.onInputChange}
                value={this.state.soat}
                required
              ></input>
            </div>
            {/* mechanical_technical_review */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Mechanical technical review number"
                name="mechanical_technical_review"
                onChange={this.onInputChange}
                value={this.state.mechanical_technical_review}
                required
              ></input>
            </div>
            {/* national_cargo_transportation_registration_card */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="National cargo transportation registration card"
                name="national_cargo_transportation_registration_card"
                onChange={this.onInputChange}
                value={
                  this.state.national_cargo_transportation_registration_card
                }
                required
              ></input>
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Driver Email"
                name="email"
                onChange={this.onInputChange}
                value={this.state.email}
                required
              ></input>
            </div>
            {/* vehicle_plate */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Vehicle plate"
                name="vehicle_plate"
                onChange={this.onInputChange}
                value={this.state.vehicle_plate}
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
              ></DatePicker>
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

export default CreateDriver;
