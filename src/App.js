import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';
import React, { useState } from 'react';
import { CButton } from '@coreui/react';
import ModalComponent from './components/ModalComponent';
import NotificationList from './components/NotificationList'; 

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <CButton onClick={() => setModalVisible(!modalVisible)}>Lancer la démo modale</CButton>
      <ModalComponent visible={modalVisible} setVisible={setModalVisible} />
      <NotificationList /> {}
    </>
  );
}

export default App;
