// Modal.jsx
import React from 'react';
import './Modal.css'; // 모달의 CSS를 임포트

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>로그인</h2>
        <p>{message}</p>
        <button className="close" onClick={onClose}>확인</button>
      </div>
    </div>
  );
};

export default Modal;
