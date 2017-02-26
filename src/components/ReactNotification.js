import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'normalize.css';

import closeIco from './closeIcon.svg';
import './ReactNotification.css';

class Notification extends React.Component{
  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);

    this.state = {
      isShowing: true,
    }
  }

  componentDidMount() {
    if (this.props.autoHide) {
      this.timeout = setTimeout(() => {
        this.hide();
      }, this.props.autoHide);
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  
  hide(){
    this.setState({ isShowing: false });
  }

  render() {
    const {
      title,
      content,
      stripColor,
      customClass,
      animation,
      fromTop,
      fromRight,
      fromBottom,
      fromLeft,
    } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName={animation}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={true}
        transitionLeaveTimeout={500}
      >
        { this.state.isShowing 
          ? <div className={`react-notification ${customClass}`} style={{
              top: fromTop,
              right: fromRight,
              bottom: fromBottom,
              left: fromLeft,
            }}>
              <span className="strip" style={{ background: stripColor }}></span>
              <a className="close" onClick={this.hide}>
                <img src={closeIco} alt="close notification"/>
              </a>
              <p className="title">{title}</p>
              <p className="content">{content}</p>
            </div>
          : null}
      </ReactCSSTransitionGroup>
    )
  }
}

Notification.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  stripColor: React.PropTypes.string,
  customClass: React.PropTypes.string,
  animation: React.PropTypes.string,
  fromTop: React.PropTypes.string,
  fromRight: React.PropTypes.string,
  fromBottom: React.PropTypes.string,
  fromLeft: React.PropTypes.string,
  autoHide: React.PropTypes.number,
};

Notification.defaultProps = {
  stripColor: '#00bcd4',
  customClass: '',
  animation: 'react-notification-default',
  fromTop: '25px',
  fromRight: '25px',
  fromBottom: 'auto',
  fromLeft: 'auto',
  autoHide: null
}

export default Notification;