
import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';
import React from 'react';
import { CModal } from '@coreui/react';
import { CModalBody } from '@coreui/react';
import { CModalFooter } from '@coreui/react';
import { CModalHeader } from '@coreui/react';
import { CModalTitle } from '@coreui/react';
import {CButton} from '@coreui/react';



function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <CButton onClick={() => setVisible(! visible)}>Lancer la démo modale</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)} className='toto'>
          <CModalTitle className='txt1'>Oups ! Il semblerait que votre<br/>abonnement a expiré... </CModalTitle> 
          <p>Veuillez réactiver votre abonnement pour pouvoir à nouveau <br></br> ajouter du contenu à votre carnet olfactif digital </p>
          <div className='button-container'>
          <CButton color="primary" className='reactive'>Réactiver mon abonnement</CButton>
          <CButton color="secondary" onClick={() => setVisible(false)} className='return'>
            Retourner à l'acceuil
          </CButton>
          </div>
      </CModal>
    </>
  )
}

export default App;

