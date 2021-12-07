import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ zIndex: '1', position: 'sticky', top: '0.1px' }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Services">Services</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about">about</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
