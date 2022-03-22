import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    return (
      <li onClick={() => this.props.markAsRead(this.props.id)} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}>
        {this.props.value}
      </li>
    )
  }
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

export default NotificationItem;
