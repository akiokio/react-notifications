import React from 'react';
import { shallow } from 'enzyme';
import ReactNotification from './ReactNotification';

describe('React Notification', () => {
  it('renders without crashing', () => {
    const mockTitle = 'Mock Title';
    const mockContent = 'Mock Content';
    const notification = shallow(<ReactNotification
                                          title={mockTitle}
                                          content={mockContent}
                                        />);
    
    // Tests props, they are diffrent from the final html
    expect(notification.instance().props.title).toBeDefined();
    expect(notification.instance().props.content).toBeDefined();
    expect(notification.instance().props.stripColor).toEqual('#fafafa');

    // Test the rendered html
    // Find for one element with the class title
    expect(notification.find('.title')).toHaveLength(1);
    // Expect the element with class title to have the mock as content
    expect(notification.find('.title').text()).toEqual(mockTitle);

    expect(notification.find('.content')).toHaveLength(1);
    expect(notification.find('.content').text()).toEqual(mockContent);    
  });
});
