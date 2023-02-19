/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { css } from 'aphrodite';
import toastStyles from '../styles/ToastStyles/styles';
import 'react-toastify/dist/ReactToastify.css';
// import toastErrorIcon from '../../public/toast-error-icon.svg';
// import toastSuccessIcon from '../../public/toast-success-icon.svg';

export enum Type {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

interface INotify {
  type : Type.SUCCESS | Type.ERROR;
  message: string;
}

/** toastify 및 modal류를 관리 */
export const ModalContext = createContext({
  toast: ({ type, message }: INotify) => {null}
});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const toastId = 'toast';

  const notify = ({ type, message }: INotify) => {
    
    const toastType = () => {
      switch (type) {
      case Type.SUCCESS:
        return toast.TYPE.SUCCESS;

      case Type.ERROR:
        return toast.TYPE.ERROR;
        
        
      default:
        return;
      }
    };
    if (!toast.isActive(toastId)) {
      toast(message, {
        toastId: toastId,
        type: toastType(),
        position: 'top-center',
        theme: 'dark',
        closeButton: false,
        draggable: false,
        closeOnClick: false,
        icon: type === Type.ERROR
          ? <img src={'/toast-error-icon.svg'} alt="toast-error-icon" width={16} height = {16} />
          : <img src={'/toast-success-icon.svg'} alt="toast-success-icon" width={16} height = {16} />
      });
        
      return;
    }
    toast.update(toastId, {
      render: message,
      type: toastType(),
      position: 'top-center',
      theme: 'dark',
      closeButton: false,
      draggable: false,
      closeOnClick: false,
      icon: type === Type.ERROR 
        ? <img src={'/toast-error-icon.svg'} alt="toast-error-icon" width={16} height = {16} />
        : <img src={'/toast-success-icon.svg'} alt="toast-success-icon" width={16} height = {16} />
    });
  };

  const modal = useMemo(() => (
    {
      toast: ({ type, message }:INotify) => notify({ type, message })
    }
  ), []);
  
  return (
    <ModalContext.Provider value={modal}>
      {children}
      <ToastContainer
        transition={Flip}
        className={css(toastStyles.custom_toast_container)}
        toastClassName={css(toastStyles.custom_toast)}
        bodyClassName={css(toastStyles.custom_body)}
        hideProgressBar={true}
        autoClose={1500}
      />
    </ModalContext.Provider>
  );
};
export default ModalProvider;
export const useModal = () => {
  const modal = useContext(ModalContext);

  return modal;
};