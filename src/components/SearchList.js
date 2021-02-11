import { CheckBoxOutlineBlank } from '@material-ui/icons';

function SearchList(props) {
    return (
        <tr key={ props.id }>
            <td>{ props.name }</td>
            <td>{ props.code }</td>
            <td>{ props.market }</td>
            <td><CheckBoxOutlineBlank /></td>
        </tr>
    );
};

export default SearchList;