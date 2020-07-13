import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div className="col-md-14 offset-md-0">
        <div className="card card-body text-center">
          <div>
            {user ? <h2>Hello, {user.displayName}</h2> : <h2>Please sign in.</h2>}
            {user ? (
              <button className="btn btn-light" onClick={signOut}>
                <i className="material-icons">toggle_off</i> Sign out
              </button>
            ) : (
              <button className="btn btn-light" onClick={signInWithGoogle}>
                <i className="material-icons">account_circle</i> Sign in with
                Google
              </button>
            )}
          </div>{" "}
        </div>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
