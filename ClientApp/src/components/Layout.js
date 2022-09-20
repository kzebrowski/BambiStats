import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {BirthdayNotification} from '../BirthdayNotification';
import { BodyMeasurementSection } from '../TypeScript/BodyMeasurementSection';
import '../styles/main.css';
import '../styles/modal.css';
import '../custom.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container className="pb-3">
          {this.props.children}
          <BirthdayNotification/>
          <BodyMeasurementSection/>
        </Container>
      </div>
    );
  }
}
