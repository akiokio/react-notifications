import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'normalize.css';

import closeIco from './closeIcon.svg';
import './ReactNotification.css';

class ReactNotification extends React.Component{
  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);

    this.state = {
      isShowing: true,
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
      animation
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
          ? <div className={`react-notification ${customClass}`}>
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

ReactNotification.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  stripColor: React.PropTypes.string,
  customClass: React.PropTypes.string,
  animation: React.PropTypes.string,
};

ReactNotification.defaultProps = {
  stripColor: '#00bcd4',
  customClass: '',
  animation: 'default'
}

export default ReactNotification;