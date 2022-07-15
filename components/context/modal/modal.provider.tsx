import React, { FC, ReactComponentElement, useContext, useEffect, useMemo, useState } from 'react';
import { ModalProps } from 'rsuite';
import CenterModal from '../../Modal';
import { ModalSize } from 'rsuite/esm/Modal/Modal';
import { IOpenModal, ModalContext } from './modal.context';

interface IModalProvider {
  size?: ModalSize;
  children: React.ReactNode;
}

const ModalProvider: FC<IModalProvider> = props => {
  const { children, size = 'sm' } = props;

  const [modal, setModal] = useState<JSX.Element | null>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<ModalProps>();

  const [onOpen, setOnOpen] = useState<Function | null>();
  const [onClose, setOnClose] = useState<Function | null>();

  useEffect(() => {
    if (isOpen) {
      if (onOpen) onOpen();
    } else if (onClose) {
      onClose();
    }
  }, [isOpen, onClose, onOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setOnOpen(null);

    setTimeout(() => {
      setModal(null);
      setOnClose(null);
    }, 500);
  };

  const setModalComponent = (newModalComponent: JSX.Element) => {
    setModal(newModalComponent);
  };

  const value = useMemo(
    () => ({
      openModal: (params: IOpenModal) => {
        const {
          modalComponent,

          onOpenModal,
          onCloseModal,
          ...modalProps
        } = params;

        setIsOpen(true);
        setModal(modalComponent);

        if (modalProps) setModalProps(modalProps);
        if (onOpenModal) setOnOpen(() => onOpenModal);
        if (onCloseModal) setOnClose(() => onCloseModal);
      },

      closeModal,
      setModalComponent,
    }),
    []
  );

  return (
    <ModalContext.Provider {...{ value }}>
      <CenterModal size={size} {...{ ...modalProps, isOpen }} onRequestClose={closeModal}>
        {modal}
      </CenterModal>

      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
