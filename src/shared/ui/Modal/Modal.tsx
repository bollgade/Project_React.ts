import React, {
  AnimationEvent,
  FC,
  ReactNode,
  useCallback,
  useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface OpenedModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const OpenedModal: FC<OpenedModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const [isClosing, setIsClosing] = useState(false);

  const closeHandler = useCallback(() => {
    if (!onClose) return;
    setIsClosing(true);
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') closeHandler();
  }, [closeHandler]);

  const onContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const onAnimationEnd = ((event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === cls.closeOverlay) {
      setIsClosing(false);
      onClose();
    }
  });

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])} onAnimationEnd={onAnimationEnd}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

interface ModalProps extends OpenedModalProps {
  keepMounted?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    isOpen,
    keepMounted,
  } = props;

  if (!isOpen && !keepMounted) return null;

  return <OpenedModal {...props} />;
};
