function BoardReplys() {
    let replys = [
        {
            key: 'r1',
            name: '김성태',
            text: '지수는 하락했는데 삼전은 상승~~'
        },
        {
            key: 'r2',
            name: '맛뚱이들',
            text: '개미 근데 너무 많은거 아니냐?'
        },
        {
            key: 'r3',
            name: '29458foxs',
            text: '사만전자일때 샀어야했는데 드럽게 오르네'
        },
        {
            key: 'r4',
            name: '님두락',
            text: '님두락 어디까지 떨어질까여??'
        },
        {
            key: 'r5',
            name: 'lol_love',
            text: '이새끼는 왜 맨날 삼전에 걸어두고 쓰냐'
        },
        {
            key: 'r6',
            name: 'chlxotn840105',
            text: '쌔빠지게 일해서 돈 다털어넣었다 십만전자가자'
        },
        {
            key: 'r7',
            name: '산악회168',
            text: '분명 떨어진다. 지금 외국인들 기관 대량으로 매도중. 개미만 주구장창 사고있다. 두고봐라. 일주일내로 폭락예상.'
        },
        {
            key: 'r8',
            name: '발없는마리천리간다',
            text: '오늘 최저가에 판 호구 있냐??'
        },
        {
            key: 'r9',
            name: '쥬린쥬린이',
            text: '상여금 받은걸로 10% 투자함 떡상만 믿는다'
        },
        {
            key: 'r10',
            name: 'hiworld1',
            text: 'eighwkdjfhqojsbsjkeighk'
        },
        {
            key: 'r11',
            name: '명품주식',
            text: '그냥 미래 생각해서 쭉 보험처럼 넣어두십쇼 형님들'
        },
    ];

    let _replys = replys.map((item) => 
        <li key={ item.key }>
            <span className="name">{ item.name }</span>
            <p>{ item.text }</p>
        </li>
    );

    return (
        <>
            { _replys }
        </>
    );
};

export default BoardReplys;