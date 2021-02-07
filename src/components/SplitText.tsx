import { ListWrapper, ListItem } from '../styled-components/styled-components';
import { IProps } from '../models/input-props'

export const SplitText: React.FC<IProps> = (props: IProps) => {
   const { text, delimiter } = props;
   const bits = text.split(delimiter);
   return (
    <ListWrapper>
       {bits.map((bit: string) => <ListItem key={bit}>{bit}</ListItem>)}
    </ListWrapper>
   )
}

SplitText.defaultProps = {
    delimiter: ','
}
