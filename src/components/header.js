import React from 'react';
import { NavLink } from "react-router-dom";
import "../app/app.css"

const header = (props) => {
  
  return (
    <div className="header">
          <nav>
      <NavLink exact activeClassName="active" to="/">
        3DModelViewer
      </NavLink>
      <NavLink activeClassName="active" to="/model">
        Model
      </NavLink>
      <NavLink activeClassName="active" to="/revisions">
        Revisions
      </NavLink>
      <NavLink activeClassName="active" to="/getNodes">
        Nodes
      </NavLink>
    </nav>
    </div>
  );
};

export default header;