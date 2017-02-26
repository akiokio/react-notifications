import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Notification from '../components/ReactNotification';

import './animation-example.css';

storiesOf('Notification element', module)
  .add('Basic', () => (
    <Notification
      title='My first notification'
      content='Lorem ipsum dor asimet'
    />
  ))
  .add('Different Strip Color', () => (
    <Notification
      title='My first notification'
      content='Lorem ipsum dor asimet'
      stripColor='#B4D455'
    />
  ))
  .add('Custom class', () => (
    <Notification
      title='My first notification'
      content='Lorem ipsum dor asimet'
      customClass='my-notification'
    />
  ))
  .add('Big content', () => (
    <Notification
      title='So this happened'
      content='Lorem ipsum dolor sit amet, has at nihil clita. Sea ei ancillae luptatum, has cu aliquid constituam. Habemus fabellas accusamus et qui. Cu mea hinc aperiam tincidunt, habeo choro est id. 🚀'
    />
  ))
  .add('Position top left', () => (
    <Notification
      title='Left aligned'
      content='Lorem ipsum dolor sit amet, has at nihil clita. 🚀'
      fromTop='10px'
      fromLeft='10px'
    />
  ))
  .add('Position Bottom left', () => (
    <Notification
      title='Left aligned'
      content='Lorem ipsum dolor sit amet, has at nihil clita. Sea ei ancillae luptatum, has cu aliquid constituam. Habemus fabellas accusamus et qui. Cu mea hinc aperiam tincidunt, habeo choro est id. 🔥'
      fromTop='auto'
      fromBottom='10px'
      fromLeft='10px'
      stripColor='#B4D455'
    />
  ))
  .add('Auto hide after 1500ms', () => (
    <Notification
      title='Auto hide after 1500ms'
      content='Read fast im leaving in 1500ms....'
      autoHide={1500}
    />
  ))
  .add('Custom Animation from left', () => (
    <Notification
      title='My first notification'
      content='Lorem ipsum dor asimet'
      animation='from-left'
      fromTop='auto'
      fromBottom='10px'
      fromLeft='10px'
    />
  ));