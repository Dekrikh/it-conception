import React from 'react';

function NotificationBadge({ count, toggleList }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img src="/notifImage.png" alt="" onClick={toggleList} style={{ cursor: 'pointer' }} />
      {count > 0 && (
        <div className="unread-notification-badge">
          {count}
        </div>
      )}
    </div>
  );
}

export default NotificationBadge;
