import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@material-ui/icons/SentimentDissatisfiedTwoTone';

function OpinionItem(props) {
    return (
        <tr key={ props.id }>
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
            <td className="recommend">
                <span className="likes">
                    <button><FavoriteTwoToneIcon fontSize="small" /></button>
                    <span className="btn">{ props.likes }</span>
                </span>
                <span className="dislikes">
                    <button><SentimentDissatisfiedTwoToneIcon fontSize="small" /></button>
                    <span className="btn">{ props.dislikes }</span>
                </span>
            </td>
        </tr>
    );
}

export default OpinionItem;