import {
  FC, Suspense, useCallback, useState,
} from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    isOpen,
    onClose,
  } = props;
  const [closeModal, setCloseModal] = useState(false);
  const onSuccess = useCallback(() => setCloseModal(true), []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeModalState={[closeModal, setCloseModal]}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onSuccess} />
      </Suspense>
    </Modal>
  );
};
