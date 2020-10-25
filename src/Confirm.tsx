import React, { useState, useEffect } from 'react';
import './Confirm.css';

export interface IProps {
    title: string;
    content: string
    cancelOption?: string;
    okOption?: string;
    open: boolean;
    handleCancelClick: () => void;
    handleConfirmClick: () => void
}
   export const Confirm: React.SFC<IProps> = (props: IProps) => {
        const { title, content, okOption, cancelOption, open, handleCancelClick, handleConfirmClick } = props;
        const [cancelClickCount, setCancelClickCount] = useState(0);
        useEffect(() => {
            console.log('Confirm first rendering');
            return () => {
                console.log('Component is unmounted');
            }
        }, [])

        const onCancelClick = () => {
            const newCount = cancelClickCount + 1;
            setCancelClickCount(newCount);
            if (cancelClickCount >= 2) {
              handleCancelClick();
            }
        }
        const onConfirmClick = () => {
            handleConfirmClick(); 
        }
        return (
            <div className={open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"}>
                <div className="confirm-container">
                    <div className="confirm-title-container">
                        <span>{title || 'React and typescript'}</span>
                    </div>
                    <div className="confirm-content-container">
                        <span>{content || 'This is where the content should go'}</span>
                    </div>
                    <div className="confirm-buttons-container">
                        <button className="confirm-cancel" onClick={onCancelClick}>{cancelClickCount === 0 ? cancelOption : 'Really'}</button>
                        <button className="confirm-ok" onClick={onConfirmClick}>{okOption}</button>
                    </div>
                </div>
            </div>
        );
    }

    Confirm.defaultProps = {
        cancelOption: 'Cancel',
        okOption: 'Okay'
    }

    
