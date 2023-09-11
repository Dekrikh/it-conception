import React from 'react';
import ModalComponent2 from './ModalComponent2';

function NotificationModal({ visible, onClose, content }) {
  return (
    <ModalComponent2
      visible={visible}
      onClose={onClose}
      content={content}
    />
  );
}

export default NotificationModal;
