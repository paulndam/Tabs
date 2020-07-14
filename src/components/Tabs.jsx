import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Tabs = (props) => {
  const [currenttab, setcurrenttab] = useState(0);
  const content = [
    "",
    "testing",
    "another testing again",
    "okay here is the last testing",
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div>
            <h1>Tabs</h1>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#"
                class={
                  currenttab === 1 ? "active" : "btn btn-primary btn-lg active"
                }
                role="button"
                aria-pressed="true"
                onClick={(e) => setcurrenttab(1)}
              >
                Tab un
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                class={
                  currenttab === 2 ? "active" : "btn btn-warning btn-lg active"
                }
                role="button"
                aria-pressed="true"
                onClick={(e) => setcurrenttab(2)}
              >
                Tab deux
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                class={
                  currenttab === 3 ? "active" : "btn btn-success btn-lg active"
                }
                role="button"
                aria-pressed="true"
                onClick={(e) => setcurrenttab(3)}
              >
                Tab trois
              </a>
            </li>
          </ul>
          <div className="alert alert-info">{content[currenttab]}</div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
