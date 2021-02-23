import BoardItem from './BoardItem';
import BOARDJSON from '../json/boardData';
import { useEffect } from 'react';

function Board() {

    useEffect(() => {
        document.title = '토론 - 주가 전망은?'
    });

    for(let key in BOARDJSON[0]) {
        localStorage.setItem(key, BOARDJSON[0][key]);
    };

    return (
        <div className="board">
            <div className="inner">
                <h2 className="hidden">토론 게시판</h2>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th className="subject">말머리</th>
                            <th className="tit">제목</th>
                            <th className="name">글쓴이</th>
                            <th className="date">날짜</th>
                            <th className="likes">좋아요</th>
                        </tr>
                        { BOARDJSON.map((item) => 
                            <BoardItem 
                            key={ item.key }
                            id={ item.key }
                            subject={ item.subject } 
                            stockName={ item.stockName } 
                            name={ item.name } 
                            title={ item.title } 
                            replyCount={ item.replyCount } 
                            date={ item.date } 
                            likes={ item.likes } 
                            dislikes={ item.dislikes } 
                            />
                        ) }
                        </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    );
};

export default Board;