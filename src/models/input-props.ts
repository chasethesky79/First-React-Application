export interface IProps {
    text: string;
    delimiter: string;
}

export interface IConfirmProps {
    title: string;
    content: string;
    cancelOption?: string;
    okOption?: string
}