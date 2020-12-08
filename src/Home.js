import React from "react";
import draw from "./draw.svg";
import logo from "./logo.png";

const Home = () => {
  return (
    <div className="App">
      <div>
        <nav
          class="navbar navbar-dark "
          style={{ backgroundColor: " #0d0e11" }}
        >
          <a class="navbar-brand" href="#" style={{ marginLeft: "10px" }}>
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
        <header className="App-header">
          <div class="container">
            <div class="row">
              <div
                class="col"
                style={{ marginTop: "auto", marginBottom: "auto" }}
              >
                <p
                  style={{
                    textAlign: "left",
                    lineHeight: "35px",
                    fontSize: "20px",
                    marginBottom: "50px",
                  }}
                >
                  Flag My IP is an IP lookup website featuring Proxy/VPN
                  detection. Perform fraud checks on online stores, detect
                  malicious players on online games and much more!
                </p>
                <a
                  href="/flag"
                  className="details"
                  style={{ marginLeft: "-480px" }}
                >
                  Flag My IP
                </a>
              </div>
              <div class="col">
                <img src={draw} style={{ width: "600px" }} />
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="container">
              <span class="text-muted" style={{ fontSize: "18px" }}>
                A project by Vadhiraja and Shreesha
              </span>
            </div>
          </footer>
        </header>
      </div>
    </div>
  );
};

export default Home;
