import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { closeNotifications } from '../utils/utils';
import { NotificationItemShape } from './NotificationItemShape';
import './Notifications.css';
import closeIcon from './close-icon.png';

function Notifications({ displayDrawer, listNotifications }) {
  if (displayDrawer) {
    return (
      <div className='notifications-div'>
        <div className='Notifications'>
          {
            listNotifications.length === 0 ?
              <p>No new notification for now</p> :
              <React.Fragment>
                <p className='notifications-p'>
                  Here is the list of notifications
                </p>
                <ul>
                  {
                    listNotifications.map((item) => {
                      return (<NotificationItem key={item.id} type={item.type} value={item.value} html={item.html} />)
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

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  listNotifications: []
}


export default Notifications;
