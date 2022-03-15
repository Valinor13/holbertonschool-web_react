import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  )
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.objectOf(PropTypes.string)
}

NotificationItem.defaultProps = {
  type: 'default'
}

export default NotificationItem;
