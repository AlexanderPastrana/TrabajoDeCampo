import React, { Component } from "react";
import { compose } from "recompose";
import axios from "axios";
import credentials from "../credentials";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 5.553032, lng: -73.355521 }}
    >
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker);
        return (
          <Marker
            key={marker._id}
            onClick={onClick}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            icon={{
              url: `/localshipping.svg`,
              scaledSize: new window.google.maps.Size(28, 28)
            }}
          >
            {props.selectedMarker === marker && (
              <InfoWindow>
                <div>
                  {marker.order_identification_number}
                  {marker.description}
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  );
});

export default class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      selectedMarker: false
    };
  }

  async componentDidMount() {
    this.getOrders();
  }

  getOrders = async () => {
    const res = await axios.get("http://localhost:4000/api/orders");
    this.setState({
      orders: res.data
    });
  };

  handleClick = (marker, event) => {
    this.setState({ selectedMarker: marker });
  };

  render() {
    return (
      <div className="col-md-14 offset-md-0">
        <div className="card card-body text-center">
          <h2>Show orders on maps</h2>
          <hr />
          <div style={{ width: "73vw", height: "80vh" }}>
            <MapWithAMarker
              selectedMarker={this.state.selectedMarker}
              markers={this.state.orders}
              onClick={this.handleClick}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${credentials.mapsKey}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            ></MapWithAMarker>
          </div>
        </div>
      </div>
    );
  }
}
