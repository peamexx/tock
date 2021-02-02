function Item() {
  return (
    <tr className="item">
      <td className="bar"><span className="line"></span><span className="box"></span></td>
      <td className="tit"><a href="#"><strong>삼성전자</strong><p className="sub">15분 지연</p></a></td>
      <td className="num nag"><p className="price">84400</p><p className="volumn">26225140</p></td>
      <td className="changeNum nag"><p className="chgp">1400</p><p className="chgr">1.69%</p></td>
  </tr>
  );
}

export default Item;
