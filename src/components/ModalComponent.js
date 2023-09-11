import React from 'react';
import { CModal, CModalTitle, CButton } from '@coreui/react';

function ModalComponent({ visible, setVisible }) {
  return (
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
  );
}

export default ModalComponent;
