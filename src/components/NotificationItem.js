import React from 'react';
import { CListGroupItem } from '@coreui/react';

function NotificationItem({ notification, onClick }) {
  return (
    <CListGroupItem
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      className={notification.isAlreadyOpen ? 'notification-read' : ''}
    >
      {notification.title}
    </CListGroupItem>
  );
}

export default NotificationItem;
