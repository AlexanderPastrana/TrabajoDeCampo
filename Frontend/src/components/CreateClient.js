import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class CreateClient extends Component {
  state = {
    first_name: "",
    last_name: "",
    document_type: "",
    document_number: "",
    phone_number: "",
    department: "",
    city: "",
    address: "",
    date: new Date(),
    editing: false
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/clients");
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id);
      const res = await axios.get(
        "http://localhost:4000/api/clients" + this.props.match.params.id
      );
      console.log(res.data);
      this.setState({
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        document_type: res.data.document_type,
        document_number: res.data.document_number,
        phone_number: res.data.phone_number,
        department: res.data.department,
        city: res.data.city,
        address: res.data.address,
        date: res.data.date,
        editing: true
      });
    }
  }

  onSubmit = async e => {
    e.preventDefault();
    if (this.state.editing) {
      const updatedClient = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        document_type: this.state.document_type,
        document_number: this.state.document_number,
        phone_number: this.state.phone_number,
        department: this.state.department,
        city: this.state.city,
        address: this.state.address,
        date: this.state.date
      };
      await axios.put(
        "http://localhost:4000/api/updatedClient/" + this.state._id,
        updatedClient
      );
    } else {
      const createClient = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        document_type: this.state.document_type,
        document_number: this.state.document_number,
        phone_number: this.state.phone_number,
        department: this.state.department,
        city: this.state.city,
        address: this.state.address,
        date: this.state.date
      };
      axios.post("http://localhost:4000/api/createClient", createClient);
    }
    window.location.href = "/listClients";
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
          <h4>Create a Client</h4>
          <hr />
          <div className=""></div>
          <form onSubmit={this.onSubmit}>
            {/* first_name */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Client first name"
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
                placeholder="Client last name"
                onChange={this.onInputChange}
                name="last_name"
                value={this.state.last_name}
                required
                autoFocus
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
            {/* department */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Department"
                name="department"
                onChange={this.onInputChange}
                value={this.state.department}
                required
              ></input>
            </div>
            {/* city */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                onChange={this.onInputChange}
                value={this.state.city}
                required
              ></input>
            </div>
            {/* address */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                onChange={this.onInputChange}
                value={this.state.address}
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

export default CreateClient;
