function getFullYear() {
  return new Date().getFullYear()
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return'Holberton School main dashboard';
}

function getLatestNotification() {
  return { __html: `<strong>Urgent requirement</strong> - complete by EOD` };
}

function closeNotifications() {
  console.log('Close button has been clicked');
}

export {
  getFullYear,
  getFooterCopy,
  getLatestNotification,
  closeNotifications
};
