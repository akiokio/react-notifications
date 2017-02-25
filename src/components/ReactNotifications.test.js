import React from 'react';
import { shallow } from 'enzyme';
import ReactNotifications from './ReactNotifications';

describe('Notifications Wrapper', () => {
  it('renders without crashing', () => {
    const notificationWrapper = shallow(<ReactNotifications addNotification={jest.fn()}/>);
    // Check the default state
    expect(notificationWrapper.state('notifications')).toHaveLength(0);
    
    // Check for the default props
    expect(notificationWrapper.instance().props.addNotification).toBeDefined();
  });
});
