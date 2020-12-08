import React from "react";
import logo from "./logo.png";
import { useHistory } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Details = () => {
  const mapStyles = {
    height: "400px",
    width: "500px",
  };

  const [center, setCenter] = React.useState({
    lat: 0,
    lng: 0,
  });
  const [load, setLoading] = React.useState(true);
  const history = useHistory();
  React.useEffect(() => {
    fetch(
      "https://geolocation-db.com/json/1a811210-241d-11eb-b7a9-293dae7a95e1"
    )
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(function (data) {
        setDetails(data);
        console.log("Data is" + data);
        return fetch(
          `http://check.getipintel.net/check.php?ip=${data.IPv4}&contact=anudip7@gmail.com`
        );
      })
      .then(function (userData) {
        console.log(userData);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  const [details, setDetails] = React.useState(null);
  const [bool, setBool] = React.useState(false);
  const [btn, setBtn] = React.useState("Flag My IP");
  const [vpn, setVPN] = React.useState(null);
  const [vstat, setVStat] = React.useState(null);
  const getDetails = async () => {
    fetch(
      "https://geolocation-db.com/json/1a811210-241d-11eb-b7a9-293dae7a95e1"
    )
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(function (data) {
        setDetails(data);
        setCenter((prevState) => ({
          ...prevState,
          lat: data.latitude,
          lng: data.longitude,
        }));
        return fetch(
          `http://check.getipintel.net/check.php?ip=${data.IPv4}&contact=anudip7@gmail.com`
        );
      })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(function (userData) {
        setVPN(userData);
        setLoading(false);
      })
      .catch(function (error) {
        console.warn(error);
      });

    console.log(details);
    setBool(!bool);
  };

  return (
    <div>
      <nav class="navbar navbar-dark " style={{ backgroundColor: " #0d0e11" }}>
        <a class="navbar-brand" href="/" style={{ marginLeft: "10px" }}>
          <img src={logo} width="30" height="35" alt="" />
        </a>
        <p
          style={{
            marginRight: "auto",
            marginTop: "14px",
            color: "aliceblue",
            fontSize: "18px",
          }}
        >
          Flag My IP
        </p>
      </nav>
      <header className="App-headerx" style={{}}>
        {bool && (
          <div style={{ display: bool ? "block" : "none" }}>
            <table class="table table-dark table-borderless">
              <tbody>
                <tr>
                  <th style={{ width: "30px" }}>IP Address</th>
                  <td>{details.IPv4}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>
                    {details.city == null && "-"}
                    {details.city != null && details.city}
                  </td>
                </tr>
                <tr>
                  <th>ZIP Code</th>
                  <td>
                    {details.postal == null && "-"}
                    {details.postal != null && details.postal}
                  </td>
                </tr>
                <tr>
                  <th>State</th>
                  <td>
                    {details.state == null && "-"}
                    {details.state != null && details.state}
                  </td>
                </tr>
                <tr>
                  <th>Country</th>
                  <td>{details.country_name}</td>
                </tr>
                <tr>
                  <th>Latitude</th>
                  <td>{details.latitude}</td>
                </tr>
                <tr>
                  <th>Longitude</th>
                  <td>{details.longitude}</td>
                </tr>
                <tr>
                  <th>VPN Status</th>
                  <td>
                    {!load && vpn < 1 && (
                      <p style={{ color: "#13e000" }}>VPN Not Used</p>
                    )}
                    {!load && vpn == 1 && (
                      <p style={{ color: "#ff4343" }}>VPN Used</p>
                    )}
                    {load && (
                      <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ marginBottom: "50px" }}>
              <LoadScript googleMapsApiKey="AIzaSyB4YpdxXTygqk5C3gBWUwjEumWBmkjTX0Y">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={13}
                  center={center}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
            {/*<p style={{ textAlign: "left" }}>
              Your IP is : {details.IPv4}
              <br />
              City : {details.city}
              <br />
              Country : {details.country_name}
              <br />
              Latitude : {details.latitude}
              <br />
              Longitude : {details.longitude}
              <br />
              VPN Status : {vstat}
            </p>
        */}
          </div>
        )}
        <div class="container">
          {!bool && (
            <div>
              <h4>
                I understand that this website collects my IP address and it's
                related attributes. Are you sure you want to continue?
              </h4>
              <div style={{ marginTop: "30px" }}>
                <button className="yn" onClick={() => getDetails()}>
                  Yes
                </button>
                <button
                  className="ynx"
                  onClick={() => {
                    history.goBack();
                  }}
                  style={{ marginLeft: "40PX" }}
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {bool && (
        <footer class="footer ">
          <div class="container" style={{ textAlign: "center" }}>
            <span class="text-muted" style={{ fontSize: "18px" }}>
              A project by Vadhiraja and Shreesha
            </span>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Details;
