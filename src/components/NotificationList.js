import React, { useState } from 'react';
import { CListGroup } from '@coreui/react';
import NotificationItem from './NotificationItem';
import NotificationBadge from './NotificationBadge';
import NotificationModal from './NotificationModal';
import './NotificationList.css';

function NotificationList() {
  const [notificationsVisible, setNotificationsVisible] = useState({});
  const [activeNotification, setActiveNotification] = useState(null);
  const [isListOpen, setListOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      title: 'Cras justo odio',
      content: 'Contenu',
      isAlreadyOpen: false,
    },
    {
      title: 'Dapibus ac facilisis in',
      content: 'Contenu',
      isAlreadyOpen: false,
    },
    {
      title: 'Morbi leo risus',
      content: 'Contenu',
      isAlreadyOpen: false,
    },
    {
      title: 'Porta ac consectetur ac',
      content: 'Contenu',
      isAlreadyOpen: false,
    },
    {
      title: 'Vestibulum at eros',
      content: 'Contenu',
      isAlreadyOpen: false,
    },
  ]);

  const toggleNotifications = (index) => {
    const newVisible = { ...notificationsVisible };
    newVisible[index] = !newVisible[index];
    setNotificationsVisible(newVisible);
    setActiveNotification(index);

    const updatedNotifications = [...notifications];
    updatedNotifications[index].isAlreadyOpen = true;
    setNotifications(updatedNotifications);
  };

  const toggleList = () => {
    setListOpen(!isListOpen);
    if (isListOpen) {
      setNotificationsVisible({});
      setActiveNotification(null);
    }
  };

  const closeNotification = () => {
    setNotificationsVisible({});
    setActiveNotification(null);
  };

  const unreadNotificationsCount = notifications.filter(
    (notification) => !notification.isAlreadyOpen
  ).length;

  return (
    <div>
      <NotificationBadge count={unreadNotificationsCount} toggleList={toggleList} />
      {isListOpen && (
        <CListGroup>
          {notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              notification={notification}
              onClick={() => toggleNotifications(index)}
            />
          ))}
        </CListGroup>
      )}
      {activeNotification !== null && (
        <NotificationModal
          visible={notificationsVisible[activeNotification]}
          onClose={closeNotification}
          content={notifications[activeNotification].content}
        />
      )}
    </div>
  );
}

export default NotificationList;
