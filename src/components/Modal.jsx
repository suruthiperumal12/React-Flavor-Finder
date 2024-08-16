import React from "react";
import styles from "./modal.module.css";

export default function Modal({ show, setShowModal, children }) {
  if (!show) {
    return null;
  }
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
