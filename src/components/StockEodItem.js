function StockEodItem(props) {    
    return (
        <>
            <tr>
                <td>{ props.date }</td>
                <td>{ props.close }</td>
                <td className="chgp">{ props.chgp }</td>
                <td className="chgr">{ props.chgr }%</td>
                <td>{ props.volume }</td>
            </tr>
        </>
    );
};

export default StockEodItem;