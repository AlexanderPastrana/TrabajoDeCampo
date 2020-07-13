import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  state = {
    username: "",
    users: []
  };

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data
    });
  };

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username
    });
    this.setState({ username: "" });
    this.getUsers();
  };

  deleteUser = async userId => {
    const response = window.confirm("Are you sure you want to delete it?");
    if (response) {
      await axios.delete("http://localhost:4000/api/users/" + userId);
      this.getUsers();
    }
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create New User</h4>
          <hr />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                value={this.state.username}
                type="text"
                onChange={this.onChangeUsername}
              />
            </div>
            <button className="btn btn-primary">
              <i className="material-icons">save</i>Save
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map(user => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CreateUser;
