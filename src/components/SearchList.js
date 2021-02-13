function SearchList(props) {
    return (
        <tr key={ props.id }>
            <td>{ props.name }</td>
            <td>{ props.code }</td>
            <td>{ props.market }</td>
        </tr>
    );
};

export default SearchList;