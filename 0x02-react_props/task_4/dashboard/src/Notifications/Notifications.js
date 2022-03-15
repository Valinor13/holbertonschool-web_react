import React from 'react';
import NotificationItem from './NotificationItem';
import { getLatestNotification, closeNotifications } from '../utils/utils';
import './Notifications.css';
import closeIcon from './close-icon.png';

function Notifications({ displayDrawer }) {
  if (displayDrawer) {
    return (
      <div className='notifications-div'>
        <div className='Notifications'>
          <p className='notifications-p'>
            Here is the list of notifications
          </p>
          <ul>
            <NotificationItem value='New course available' />
            <NotificationItem type='urgent' value="New resume available" />
            <NotificationItem type='urgent' html={getLatestNotification()} />
          </ul>
        </div>
        <button className='close-button' onClick={closeNotifications} aria-label={'Close'}>
          <img src={closeIcon} alt='' className='close-icon'></img>
        </button>
      </div>
    )
  }
  return (<React.Fragment />);
}

export default Notifications;
