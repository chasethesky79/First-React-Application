import React from 'react';
import './Confirm.css';

export interface IProps {
    title: string;
    content: string
    cancelOption?: string;
    okOption?: string;
    open: boolean;
    handleCancelClick: () => void;
}

export class Confirm extends React.Component<IProps> {
    public static defaultProps = {
        cancelOption: 'Cancel',
        okOption: 'Okay'
    };
    public render() {
        const { title, content, okOption, cancelOption, open } = this.props;
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
                        <button className="confirm-cancel" onClick={this.onCancelClick}>{cancelOption}</button>
                        <button className="confirm-ok">{okOption}</button>
                    </div>
                </div>
            </div>
        );
    }

    private onCancelClick = () => {
        this.props.handleCancelClick();
    }
} 