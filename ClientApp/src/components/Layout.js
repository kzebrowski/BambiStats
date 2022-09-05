import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {BodyMeasurementTable} from '../BodyMeasurementTable'
import '../styles/main.css'

export class Layout extends Component {
  static displayName = Layout.name;

  dummyData = [
    {
      valueDate: new Date(),
      weight: 2.8,
      numberOfPoops: 4
    }
  ];

  render () {
    return (
      <div>
        <NavMenu />
        <Container className="pb-3">
          {this.props.children}
          <BodyMeasurementTable data={this.dummyData} />
        </Container>
      </div>
    );
  }
}
