import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

class ListClients extends Component {
  state = {
    clients: []
  };

  async componentDidMount() {
    this.getClients();
  }

  getClients = async () => {
    const res = await axios.get("http://localhost:4000/api/clients");
    this.setState({
      clients: res.data
    });
  };

  deleteClient = async clientId => {
    await axios.delete("http://localhost:4000/api/deleteClient/" + clientId);
    this.getClients();
  };

  render() {
    return (
      <div className="row">
        {this.state.clients.map(client => (
          <div className="col-md-4 p-2" key={client._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>{client.first_name + " " + client.last_name}</h5>
                <Link
                  to={"/updatedClient/" + client._id}
                  className="btn btn-secondary"
                >
                  <i className="material-icons">border_color</i>
                </Link>
              </div>
              <div className="card-body">
                <p>{client._id}</p>
                <p>First Name: {client.first_name}</p>
                <p>Last Name: {client.last_name}</p>
                <p>Doc Type: {client.document_type}</p>
                <p>Doc Numb: {client.document_number}</p>
                <p>Phone Numb: {client.phone_number}</p>
                <p>Department: {client.department}</p>
                <p>City: {client.city}</p>
                <p>Address: {client.address}</p>
                <p>Date: {client.date}</p>
                <p>{format(client.createdAt)}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteClient(client._id)}
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

export default ListClients;
