function OpinionItem(props) {  
  return (
    <tr>
        <td className="subject">{ props.subject }</td>
        <td className="tit">
            <a href="/opinionPost">
                <strong className="stockName">[{ props.stockName }]</strong>
                <span className="title">{ props.title }</span>
                <span className="replyCount">[{ props.replyCount }]</span>
            </a>
        </td>
        <td className="name">{ props.name }</td>
        <td className="date">{ props.date }</td>
        <td className="likes">
            <span className="like">
                <button>❤</button>
                <span>2001</span>
            </span>
            <span className="dislike">
                <button>💦</button>
                <span>1000</span>
            </span>
        </td>
    </tr>
  );
}

export default OpinionItem;
