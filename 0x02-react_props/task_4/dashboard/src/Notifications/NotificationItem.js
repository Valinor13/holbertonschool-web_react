import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  return (
    <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>
      {props.value}
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
