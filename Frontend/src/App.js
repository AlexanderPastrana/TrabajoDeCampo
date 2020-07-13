import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// imports de los componenes con los formularios
import CreateClient from "./components/CreateClient";
import CreateDriver from "./components/CreateDriver";
import CreateOrder from "./components/CreateOrder";
import CreateRoute from "./components/CreateRoute";
import CreateUser from "./components/CreateUser";

// imports de los componenes con las listas
import ListClients from "./components/ListClients";
import ListDrivers from "./components/ListDrivers";
import ListOrders from "./components/ListOrders";
import ListRoutes from "./components/ListRoutes";

// import del componente para google maps
import GoogleMaps from "./components/GoogleMaps";

// imports de las barras de navegacion
import NavBar from "./components/NavBar";

// imports de la mainWindow

import MainWindow from "./components/MainWindow";

// import de la clase para los estilos
import "./App.css";

// imports de los componentes de registro y inicio de sesion 
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <div className="container p-4">
        <Route path="/mainWindow" component={MainWindow} />
        <Route path="/logIn" component={Login} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/listClients" component={ListClients} />
        <Route path="/listDrivers" component={ListDrivers} />
        <Route path="/listOrders" component={ListOrders} />
        <Route path="/listRoutes" component={ListRoutes} />
        <Route path="/updatedClient/:id" component={CreateClient} />
        <Route path="/createClient" component={CreateClient} />
        <Route path="/createDriver" component={CreateDriver} />
        <Route path="/createOrder" component={CreateOrder} />
        <Route path="/createRoute" component={CreateRoute} />
        <Route path="/createUser" component={CreateUser} />
        <Route path="/showMap" component={GoogleMaps} />
      </div>
    </Router>
  );
}

export default App;
