import React from 'react';
import { CListGroupItem, CBadge } from '@coreui/react';
import './NotificationList.css';

function NotificationItem({ notification, onClick }) {
    return (
      <CListGroupItem
        onClick={onClick}
        style={{ cursor: 'pointer' }}
        className={notification.isAlreadyOpen ? 'notification-read' : ''}
      >
        {notification.title}
        {!notification.isAlreadyOpen && (
          <CBadge className="notification-badge">
            &nbsp;
          </CBadge>
        )}
      </CListGroupItem>
    );
  }
  

export default NotificationItem;
