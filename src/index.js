
import React, { Component } from "react";
import { render } from "react-dom";
import { samples } from "./samples";
import * as serviceWorker from './serviceWorker';
import './index.css';

import 'bootstrap-4-migrate/css/bootstrap-4-migrate.min.css';

import Form from "@rjsf/core";
// import Form from "react-jsonschema-form-bs4";


// Import resume schema
const { schema } = samples.Resume

const log = (type) => console.log.bind(console, type);

function ObjectFieldTemplate(props) {
  return (
    <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.properties.map(element => <div className="property-wrapper">{element.content}</div>)}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

function ArrayFieldTemplate(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.items.map(element => element.children)}
      {props.canAdd && <button type="button" onClick={props.onAddClick}>Add</button>}
    </div>
  );
}


render((

  <Form schema={schema}
    //ObjectFieldTemplate={ObjectFieldTemplate} 
    // ArrayFieldTemplate={ArrayFieldTemplate}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")} />
), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
