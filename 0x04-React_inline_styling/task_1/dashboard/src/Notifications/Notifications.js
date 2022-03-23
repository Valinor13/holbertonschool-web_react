import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import { closeNotifications } from '../utils/utils';
import { NotificationItemShape } from './NotificationItemShape';
import closeIcon from './close-icon.png';

const styles = StyleSheet.create({
  notificationsDiv: {
    width: '100%',
    border: '2px dashed #e11d3f',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notifications: {
    padding: '15px',
  },
  closeIcon: {
    width: '20px',
    height: '20px',
  },
  closeButton: {
    backgroundColor: 'white',
    border: 'none',
    height: '20px',
  },
});

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
        <div className={css(styles.notificationsDiv)}>
          <div className={css(styles.notifications)}>
            {
              this.props.listNotifications.length === 0 ?
                <p>No new notification for now</p> :
                <React.Fragment>
                  <p>
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
          <button className={css(styles.closeButton)} onClick={closeNotifications} aria-label={'Close'}>
            <img src={closeIcon} alt='' className={css(styles.closeIcon)}></img>
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
