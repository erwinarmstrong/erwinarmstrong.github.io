import React, { useState } from 'react';
import ModalTable from './ModalTable';

function BottomBar({ onNavigateBack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileContent, setFileContent] = useState('');
  const [sendToModal, setSendToModal] = useState(''); // Corrected typo in variable name

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pasteAndGo = () => {
    navigator.clipboard.readText().then(text => {
      setFileContent(text);
      openModal(true);
    }).catch(error => {
      console.error('Error reading from clipboard:', error);
    });
  };

  return (
    <div className="BottomBar">
      <div className="BottomBarButtons">
        <button className="BottomBarButton" onClick={pasteAndGo}>
          Paste and Go
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ModalTable
              sendToModal={sendToModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BottomBar;
