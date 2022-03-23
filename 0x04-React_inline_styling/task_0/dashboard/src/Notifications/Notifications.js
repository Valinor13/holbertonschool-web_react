import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { closeNotifications } from '../utils/utils';
import { NotificationItemShape } from './NotificationItemShape';
import './Notifications.css';
import closeIcon from './close-icon.png';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    if (this.props.displayDrawer) {
      return (
        <div className='notifications-div'>
          <div className='Notifications'>
            {
              this.props.listNotifications.length === 0 ?
                <p>No new notification for now</p> :
                <React.Fragment>
                  <p className='notifications-p'>
                    Here is the list of notifications
                  </p>
                  <ul>
                    {
                      this.props.listNotifications.map((item) => {
                        return (<NotificationItem markAsRead={this.markAsRead} key={item.id} type={item.type} value={item.value} html={item.html} id={item.id} />)
                      })
                    }
                  </ul>
                </React.Fragment>
            }
          </div>
          <button className='close-button' onClick={closeNotifications} aria-label={'Close'}>
            <img src={closeIcon} alt='' className='close-icon'></img>
          </button>
        </div>
      )
    }
    return (<React.Fragment />);
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  listNotifications: []
}

export default Notifications;
