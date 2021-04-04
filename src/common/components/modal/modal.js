import React from 'react';
import style from './modal.module.scss'

const Modal = ({modal, setModal, children}) => {
    const finalModalClassName = `${style.modal} ${modal ? style.active : ""}`;
    const finalModalContentClassName = `${style.modal_content} ${modal ? style.active : ""}`;
    return (
        <div className={finalModalClassName} onClick={ () => setModal(true)}>
            <div className={finalModalContentClassName} onClick={e =>  e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;