import React, { useState } from 'react';
import ModalTable from './ModalTable';

function BottomBar({ onNavigateBack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileContent, setFileContent] = useState('');

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


  const handleFileUpload = (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
        openModal(); // Open the modal after content is loaded
      };

      reader.readAsText(file);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
    openModal();
  };

  return (
    <div className="BottomBar">
      <div className="BottomBarButtons">
        <div className='BottombarButton'>
          <button className="BottombarButton" onClick={pasteAndGo}>
            <div className="ButtonText">Paste and Go</div>
          </button>
        </div>
        <div className='BottombarButton'>
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileUpload} />
          <button className="BottombarButton" onClick={handleButtonClick}>
            <div className="ButtonText">File Upload</div>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ModalTable
              sendToModal={fileContent}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BottomBar;
