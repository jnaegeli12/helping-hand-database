import React from "react";

// Destructuring the type, classNameName, children and onClick props, applying them to the button element
const Nav = () => {
  return (
        <nav className="navbar navbar-light bg-light">
             <a className="navbar-brand" href="/">
                <img src="/assets/Helping-Hand-Logo.png" height="50" className="d-inline-block align-top"
                    alt="Helping Hand logo"/>
                Helping Hand
             </a>
          <form className="form-inline">
              <a href="/results">
                <button className="btn btn-danger" type="button">
                  All Organizations
                </button>
              </a>
              <a href="/submit">
                <button className="btn btn-danger" type="button">
                  Add a Service Organization
                </button>
              </a>
            </form>
        </nav>
  ); 
}
export default Nav;