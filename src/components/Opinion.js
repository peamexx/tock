import OpinionItem from './OpinionItem';

function Opinion(props) {

    let opinionItem = [
        {
            subject: '위클리 핫',
            stockName: '삼성전자',
            name: '천진반',
            title: '2/1 마감 시황 안내★★★★★★★★',
            replyCount: 10,
            date: '02/01',
        },
        {
            subject: '위클리 핫',
            stockName: '셀트리온',
            name: '돌아에몽05',
            title: '다음주 코로나19 변이 관련 발표/항체치료제 국산 첫허가/임상결과 여기서 확인',
            replyCount: 37,
            date: '02/04',
        },
        {
            subject: '위클리 핫',
            stockName: '에스씨엠생명과학',
            name: '떡상은나의것',
            title: '기관외국인 싹쓸이중',
            replyCount: 15,
            date: '02/12',
        },
    ];

    opinionItem.forEach((item, index) => {
        for(let key in item) {
            localStorage.setItem(key + index, item[key]);
        }
    });

    return (
        <div className="opinion">
            <div className="inner">
                <table>
                    <tr>
                        <th className="subject">말머리</th>
                        <th className="tit">제목</th>
                        <th className="name">글쓴이</th>
                        <th className="date">날짜</th>
                        <th className="likes">좋아요</th>
                    </tr>
                    { opinionItem.map((item) => 
                        <OpinionItem 
                        subject={ item.subject } 
                        stockName={ item.stockName } 
                        name={ item.name } 
                        title={ item.title } 
                        replyCount={ item.replyCount } 
                        date={ item.date } 
                        />
                    ) }
                </table>
            </div>
        </div>
    );
};

export default Opinion;