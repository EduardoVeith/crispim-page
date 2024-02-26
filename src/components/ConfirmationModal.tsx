"use client";

import React, { useEffect } from "react";
import ReactPortal from "./ReactPortal";

interface ConfirmationModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const ConfirmationModal = ({
  children,
  isOpen,
  handleClose,
}: ConfirmationModalProps) => {
  // fechar o modal quando pressionar uma "escape key"
  useEffect(() => {
    const closeOnEspaceKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEspaceKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEspaceKey);
    };
  }, [handleClose]);

  // desabilitar o scroll quando o modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50" />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 h-300 rounded bg-white shadow-lg">
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-4 font-bold text-gray-600 hover:text-gray-900"
            ></button>
            <div className="">{children}</div>
          </div>
        </div>
      </>
    </ReactPortal>
  );
};

export default ConfirmationModal;
