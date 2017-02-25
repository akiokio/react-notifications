import React from 'react';
import { shallow } from 'enzyme';
import ReactNotification from './ReactNotification';

describe('React Notification', () => {
  const mockTitle = 'Mock Title';
  const mockContent = 'Mock Content';

  it('renders without crashing', () => {
    const notification = shallow(<ReactNotification
                                  title={mockTitle}
                                  content={mockContent}
                                />);
    
    // Tests props, they are diffrent from the final html
    expect(notification.instance().props.title).toBeDefined();
    expect(notification.instance().props.content).toBeDefined();
    expect(notification.instance().props.stripColor).toEqual('#00bcd4');

    // Test the rendered html
    // Find for one element with the class title
    expect(notification.find('.title')).toHaveLength(1);
    // Expect the element with class title to have the mock as content
    expect(notification.find('.title').text()).toEqual(mockTitle);

    expect(notification.find('.content')).toHaveLength(1);
    expect(notification.find('.content').text()).toEqual(mockContent);

    expect(notification.find('.close')).toHaveLength(1);
  });

  it('renders with a diffrent color strip', () => {
    const stripCustomColor = '#B4D455';
    const notification = shallow(<ReactNotification
                                  title={mockTitle}
                                  content={mockContent}
                                  stripColor={stripCustomColor}
                                />);

    expect(notification.find('.strip').html()).toEqual(`<span class="strip" style="background:${stripCustomColor};"></span>`);
  });

  it('close when click on hide', () => {
    const notification = shallow(<ReactNotification
                                  title={mockTitle}
                                  content={mockContent}
                                />);

    notification.find('.close').simulate('click');
    expect(notification.state().isShowing).toBeFalsy();
    expect(notification.html()).toEqual('<span></span>');
  });
});
