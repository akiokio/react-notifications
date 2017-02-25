import React from 'react';

class ReactNotifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: this.props.notifications
    };
  }

  render() {
    return (
      <div className="react-notifications-wrapper">
        
      </div>
    )
  }
};

ReactNotifications.propTypes = {
  notifications: React.PropTypes.array,
  addNotification: React.PropTypes.func.isRequired,
};

ReactNotifications.defaultProps = {
  notifications: [],
};

export default ReactNotifications;