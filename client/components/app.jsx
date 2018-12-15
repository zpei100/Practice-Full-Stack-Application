import React, { Component } from 'react';
import People from './people.jsx';
import Buttons from './buttons.jsx';
import Filter from './filter.jsx';
import Form from './form.jsx';
import Average from './average.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-sm-6">
            <div className="d-flex">
              <Buttons />
              <Filter />
            </div>
            <People />
          </div>

          <div className="col-sm-5">
            <Form />
            <Average />
          </div>
        </div>
      </div>
    );
  }
}
