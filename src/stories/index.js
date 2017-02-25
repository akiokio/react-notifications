import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ReactNotifications from '../components/ReactNotifications';
import ReactNotification from '../components/ReactNotification';

storiesOf('Notification Wrapper', module)
  .add('Basic', () => (
    <ReactNotifications addNotification={() => {}} />
  ));

storiesOf('Notification element', module)
  .add('Basic', () => (
    <ReactNotification title='My first notification' content='Lorem ipsum dor asimet' />
  ))
  .add('Different Strip Color', () => (
    <ReactNotification
      title='My first notification'
      content='Lorem ipsum dor asimet'
      stripColor='#B4D455'
    />
  ))
  .add('Big content', () => (
    <ReactNotification
      title='So this happened'
      content='Lorem ipsum dolor sit amet, has at nihil clita. Sea ei ancillae luptatum, has cu aliquid constituam. Habemus fabellas accusamus et qui. Cu mea hinc aperiam tincidunt, habeo choro est id. 🚀'
    />
  ));