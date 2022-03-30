import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'navy',
  },
  urgent: {
    color: '#e11d3f',
  },
  small: {
    '@media (max-width: 900px)': {
      borderBottom: "1.5px solid black",
      listStyleType: "none",
      padding: "10px 8px"
    }
  }
})

function NotificationItem({ markAsRead, type, value, html, id }) {

  function isUrgent(type) {
    if (type === "urgent") {
      return true;
    }
    return false;
  }

  return (
    <li className={css(isUrgent(type) ? styles.urgent : styles.default, styles.small)}
      onClick={() => markAsRead(id)}
      dangerouslySetInnerHTML={html}>
      {value}
    </li>
  )
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.number,
  markAsRead: PropTypes.func
}

NotificationItem.defaultProps = {
  type: 'default',
  id: 0,
  markAsRead: () => console.log(`markAsRead missing`),
}

export default memo(NotificationItem);
