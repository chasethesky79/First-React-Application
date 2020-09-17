import React from 'react';
import './Confirm.css';

export interface IProps {
    title: string;
    content: string
    cancelOption?: string;
    okOption?: string
}

export class Confirm extends React.Component<IProps> {
    public static defaultProps = {
        cancelOption: 'Cancel',
        okOption: 'OKAY'
    };
    public render() {
        const { title, content, okOption, cancelOption } = this.props;
        return (
            <div className="confirm-wrapper confirm-visible">
                <div className="confirm-container">
                    <div className="confirm-title-container">
                        <span>{title || 'React and typescript'}</span>
                    </div>
                    <div className="confirm-content-container">
                        <span>{content || 'This is where the content should go'}</span>
                    </div>
                    <div className="confirm-buttons-container">
                        <button className="confirm-cancel">{cancelOption}</button>
                        <button className="confirm-ok">{okOption}</button>
                    </div>
                </div>
            </div>
        );
    }
} 