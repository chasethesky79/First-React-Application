import './Confirm.css';
import { IConfirmProps } from '../models/input-props';

export const Confirm: React.FC<IConfirmProps> = (props: IConfirmProps) => {
    const { title, content, cancelOption, okOption, handleCancelClick, handleOkClick, open } = props;
    return (
        <div className={open ? 'confirm-wrapper confirm-visible': 'confirm-wrapper'}>
          <div className='confirm-container'>
              <div className='confirm-title-container'>
                  <span>{title}</span>
              </div>
              <div className='confirm-content-container'>
                  <p>{content}</p>
              </div>
              <div className='confirm-buttons-container'>
                  <button className='confirm-cancel'>{cancelOption}</button>
                  <button className='confirm-ok' onClick={handleOkClick}>{okOption}</button>
              </div>
          </div>
        </div>
    )
}

Confirm.defaultProps = {
 cancelOption: 'No Way',
 okOption: 'Okay'
}