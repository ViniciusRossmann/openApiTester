import React from "react";

const RequestModal = ({data, open, onClose}) => {
    if (!open) return null;
    return (
        <div className="dialog-ux">
            <div className="backdrop-ux"></div>
            <div className="modal-ux">
                <div className="modal-dialog-ux">
                    <div className="modal-ux-inner">
                        <div className="modal-ux-header">
                            <h3>{`${data.method.toUpperCase()} ${data.path}`}</h3>
                            <button type="button" className="close-modal" onClick={onClose}>
                                <svg width="20" height="20">
                                    <use href="#close" xlinkHref="#close" />
                                </svg>
                            </button>
                        </div>
                        <div className="modal-ux-content">
                            Teste
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestModal;