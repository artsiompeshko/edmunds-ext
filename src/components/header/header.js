import React from 'react';
import logo from 'bundle-text:./logo.svg';
import './header.css';

function Header({onClose}) {
  return (
    <header className="navbar navbar-light bg-white edm-ext-header">
      <div className="container-fluid">
        <div className="navbar-brand w-100 d-flex align-items-center justify-content-between me-0">
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center"
              dangerouslySetInnerHTML={{__html: logo}}
            ></div>
            <h3 className="fs-6 ms-2 my-0 p-0">Edmunds Hint</h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="btn btn-sm btn-close"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
