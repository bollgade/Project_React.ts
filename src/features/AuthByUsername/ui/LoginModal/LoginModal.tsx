import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    isOpen,
    onClose,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
