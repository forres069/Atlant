import React from 'react';
import ReactDOM from 'react-dom';
import '../css/auth-styles.css';

const Modal = ({ isOpen, children, onClose }) => {    
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal">
           <div className="modal-content">
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;