import React from 'react';
import { getLatestNotification, closeNotifications } from './utils';
import './Notifications.css';
import closeIcon from './close-icon.png';

function Notifications() {
  return (
    <div className='notifications-div'>
      <div className='Notifications'>
        <p className='notifications-p'>
          Here is the list of notifications
        </p>
        <ul>
          <li data='default'>New course available</li>
          <li data='urgent'>New resume available</li>
          <li data='urgent' dangerouslySetInnerHTML={getLatestNotification()} />
        </ul>
      </div>
      <button className='close-button' onClick={closeNotifications} aria-label={'Close'}>
        <img src={closeIcon} alt='' className='close-icon'></img>
      </button>
    </div>
  )
}

export default Notifications
