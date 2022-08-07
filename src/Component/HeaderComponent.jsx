import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="www.jsx.com" className="navbar-brand">Employee Management </a></div>

            </nav>
        </header>

      </div>
    )
  }
}
