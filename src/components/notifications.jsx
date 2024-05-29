import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
const Notifications = () => {
  return (
    <>
      <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <Dropdown.Item href="#/action-1" className="dropdown-header">
          You have 4 new notifications
          <Link to="#">
            <span className="badge rounded-pill bg-gradient-primary p-2 ms-2 text-white">
              View all
            </span>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          className="border-top notification-item"
        >
          {" "}
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p className="text-bluec">Quae dolorem earum veritatis oditseno</p>
            <p className="text-lightc">30 min. ago</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          className="border-top notification-item"
        >
          {" "}
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p className="text-lightc">30 min. ago</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="border-top dropdown-footer">
          {" "}
          <Link to="#">Show all notifications</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </>
  );
};

export default Notifications;
