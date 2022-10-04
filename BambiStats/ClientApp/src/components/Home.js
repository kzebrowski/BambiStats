import React, { Component } from 'react';
import {BirthdayNotification} from '../BirthdayNotification';
import { BodyMeasurementSection } from '../TypeScript/BodyMeasurement/BodyMeasurementSection';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <BirthdayNotification/>
        <BodyMeasurementSection/>
      </div>
    );
  }
}
