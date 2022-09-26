import React from 'react';
import Modal from 'react-modal';

interface Props
{
    isOpen: boolean,
    message: string,
    handleYes: () => void,
    handleNo: () => void
}

export const ConfirmationModal : React.FC<Props> = (props : Props) => 
{
    return (
        <Modal isOpen={props.isOpen} className="centered-modal confirmation-modal rounded" ariaHideApp={false}>
          <div>{props.message}</div>
          <button className="generic-submit-button-dark confirm-button rounded" onClick={() => props.handleYes}>Tak</button>
          <button className="generic-submit-button-light decline-button rounded" onClick={props.handleNo}>Nie</button>
        </Modal>
    );
}