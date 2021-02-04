function Item(props) {
  return (
    <tr className={ "item " + props.upDown }>
      <td className="bar">
        <span className="line"></span>
        <span className="box"></span>
      </td>
      <td className="tit">
        <a href="#">
          <strong>{ props.name }</strong>
          <span className="code">{ props.code }</span>
          <p className="sub">15분 지연</p>
        </a>
      </td>
      <td className="num">
        <p className="price">{ props.price }</p>
        <p className="volumn">{ props.volumn }</p>
      </td>
      <td className="changeNum">
        <p className="chgp">{ props.chgp }</p>
        <p className="chgr">{ props.chgr }%</p>
      </td>
  </tr>
  );
}

export default Item;
