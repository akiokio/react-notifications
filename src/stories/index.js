import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ReactNotifications from '../components/ReactNotifications';

storiesOf('Notification', module)
  .add('Basic', () => (
    <ReactNotifications addNotification={() => {}} />
  ));