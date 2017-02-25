import React from 'react';

const ReactNotification = ({ title, content, stripColor}) => {
  return (
    <div className="react-notification">
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  )
}

ReactNotification.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  stripColor: React.PropTypes.string,
};

ReactNotification.defaultProps = {
  stripColor: '#fafafa',
}

export default ReactNotification;