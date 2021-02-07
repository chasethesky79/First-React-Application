export interface IProps {
    text: string;
    delimiter: string;
}

export interface IConfirmProps {
    open: boolean;
    title: string;
    content: string;
    cancelOption?: string;
    okOption?: string;
    handleOkClick: () => void;
    handleCancelClick: () => void;
}

export interface IState {
    confirmOpen: boolean
}