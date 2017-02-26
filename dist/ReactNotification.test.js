'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _ReactNotification = require('./ReactNotification');

var _ReactNotification2 = _interopRequireDefault(_ReactNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('React Notification', function () {
  var mockTitle = 'Mock Title';
  var mockContent = 'Mock Content';

  it('renders without crashing', function () {
    var notification = (0, _enzyme.shallow)(_react2.default.createElement(_ReactNotification2.default, {
      title: mockTitle,
      content: mockContent
    }));

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

  it('renders with a diffrent color strip', function () {
    var stripCustomColor = '#B4D455';
    var notification = (0, _enzyme.shallow)(_react2.default.createElement(_ReactNotification2.default, {
      title: mockTitle,
      content: mockContent,
      stripColor: stripCustomColor
    }));

    expect(notification.find('.strip').html()).toEqual('<span class="strip" style="background:' + stripCustomColor + ';"></span>');
  });

  it('close when click on hide', function () {
    var notification = (0, _enzyme.shallow)(_react2.default.createElement(_ReactNotification2.default, {
      title: mockTitle,
      content: mockContent
    }));

    notification.find('.close').simulate('click');
    expect(notification.state().isShowing).toBeFalsy();
    expect(notification.html()).toEqual('<span></span>');
  });

  it('auto hide in 2000ms', function () {
    jest.useFakeTimers();
    var notification = (0, _enzyme.mount)(_react2.default.createElement(_ReactNotification2.default, {
      title: mockTitle,
      content: mockContent,
      autoHide: 2000
    }));
    expect(notification.state().isShowing).toEqual(true);
    jest.runTimersToTime(2501); //Timer plus animation time
    expect(notification.state().isShowing).toEqual(false);
    expect(notification.html()).toEqual('<span></span>');
  });

  it('remove timeout if component is unmounting', function () {
    jest.useFakeTimers();
    var notification = (0, _enzyme.mount)(_react2.default.createElement(_ReactNotification2.default, {
      title: mockTitle,
      content: mockContent,
      autoHide: 2000
    }));
    _sinon2.default.spy(_ReactNotification2.default.prototype, 'componentWillUnmount');
    expect(notification.instance().timeout).toBeTruthy();
    notification.unmount();
    expect(_ReactNotification2.default.prototype.componentWillUnmount.calledOnce).toBe(true);
  });
});