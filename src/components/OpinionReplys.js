function OpinionReplys() {
    let replys = [
        {
            name: '김성태',
            text: '지수는 하락했는데 삼전은 상승~~'
        },
        {
            name: '맛뚱이들',
            text: '개미 근데 너무 많은거 아니냐?'
        },
        {
            name: '29458foxs',
            text: '사만전자일때 샀어야했는데 드럽게 오르네'
        },
        {
            name: '님두락',
            text: '님두락 어디까지 떨어질까여??'
        },
        {
            name: 'lol_love',
            text: '이새끼는 왜 맨날 삼전에 걸어두고 쓰냐'
        },
        {
            name: 'chlxotn840105',
            text: '쌔빠지게 일해서 돈 다털어넣었다 십만전자가자'
        },
        {
            name: '산악회168',
            text: '분명 떨어진다. 지금 외국인들 기관 대량으로 매도중. 개미만 주구장창 사고있다. 두고봐라. 일주일내로 폭락예상.'
        },
        {
            name: '발없는마리천리간다',
            text: '오늘 최저가에 판 호구 있냐??'
        },
        {
            name: '쥬린쥬린이',
            text: '상여금 받은걸로 10% 투자함 떡상만 믿는다'
        },
        {
            name: 'hiworld1',
            text: 'eighwkdjfhqojsbsjkeighk'
        },
        {
            name: '명품주식',
            text: '그냥 미래 생각해서 쭉 보험처럼 넣어두십쇼 형님들'
        },
    ];

    let _replys = replys.map((item) => 
        <li>
            <span className="name">{ item.name }</span>
            <p>{ item.text }</p>
            {/* <div className="modify">
                <input type="text" placeholder="수정할 내용을 작성해주세요."/>
                <button>수정</button>
                <button>취소</button>
            </div> */}
        </li>
    );

    return (
        <>
            { _replys }
        </>
    );
};

export default OpinionReplys;