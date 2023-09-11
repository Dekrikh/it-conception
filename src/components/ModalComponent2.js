import React from 'react';
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CButton } from '@coreui/react';


function ModalComponent2({ visible, onClose, content }) {
  return (
    <CModal visible={visible} onClose={onClose}>
      <CModalHeader closeButton={false}>
        <CModalTitle>Notification</CModalTitle>
      </CModalHeader>
      <CModalBody>{content}</CModalBody>
      <CModalFooter>
        <CButton className="custom-close-button" color="secondary" onClick={onClose}>Fermer</CButton>
      </CModalFooter>
    </CModal>
  );
}

export default ModalComponent2;
