import { CheckBoxOutlineBlank } from '@material-ui/icons';

function FindItem(props) {
    return (
        <tr>
            <td>{ props.name }</td>
            <td>{ props.code }</td>
            <td>{ props.market }</td>
            <td><CheckBoxOutlineBlank /></td>
        </tr>
    );
};

export default FindItem;