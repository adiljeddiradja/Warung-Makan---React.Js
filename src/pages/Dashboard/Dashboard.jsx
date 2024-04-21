import { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
        <div className="container-fluid pt-4 px-4">
          <h2>Dashboard</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Orders</h5>
                  <p className="card-text">120</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Revenue</h5>
                  <p className="card-text">$10,000</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">New Customers</h5>
                  <p className="card-text">25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}