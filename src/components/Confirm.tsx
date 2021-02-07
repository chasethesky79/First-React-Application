import './Confirm.css';
import { IConfirmProps } from '../models/input-props';
import { ok } from 'assert';

export const Confirm: React.FC<IConfirmProps> = (props: IConfirmProps) => {
    const { title, content, cancelOption, okOption } = props;
    return (
        <div className='confirm-wrapper confirm-visible'>
          <div className='confirm-container'>
              <div className='confirm-title-container'>
                  <span>{title}</span>
              </div>
              <div className='confirm-content-container'>
                  <p>{content}</p>
              </div>
              <div className='confirm-buttons-container'>
                  <button className='confirm-cancel'>{cancelOption}</button>
                  <button className='confirm-ok'>{okOption}</button>
              </div>
          </div>
        </div>
    )
}

Confirm.defaultProps = {
 cancelOption: 'No Way',
 okOption: 'Okay'
}