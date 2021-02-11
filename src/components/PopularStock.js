import { useState } from 'react';

function PopularStock() {

    let popularStockObj = [
        {
            watch: [
                {
                    key: 'w1',
                    name: '삼성전자',
                    price: 84600,
                    chgp: 200,
                    chgr: 0.24,
                    color: 'pos'
                },
                {
                    key: 'w2',
                    name: '테슬라',
                    price: 854.69,
                    chgp: -18.10,
                    chgr: -2.07,
                    color: 'nag'
                },
                {
                    key: 'w3',
                    name: 'LG화학',
                    price: 999000,
                    chgp: 34000,
                    chgr: 3.52,
                    color: 'pos'
                },
                {
                    key: 'w4',
                    name: '넥슨지티',
                    price: 15200,
                    chgp: 100,
                    chgr: 0.66,
                    color: 'pos'
                },
            ],
            news: [
                {
                    key: 'n1',
                    name: 'SK이노베이션',
                    price: 316000,
                    chgp: -1500,
                    chgr: -0.47,
                    color: 'nag'
                },
                {
                    key: 'n2',
                    name: '한미약품',
                    price: 373000,
                    chgp: -5000,
                    chgr: -1.32,
                    color: 'nag'
                },
                {
                    key: 'n3',
                    name: 'LG화학',
                    price: 999000,
                    chgp: 34000,
                    chgr: 3.52,
                    color: 'pos'
                },
                {
                    key: 'n4',
                    name: '현대차',
                    price: 245500,
                    chgp: 5000,
                    chgr: 2.08,
                    color: 'pos'
                },
            ],
            debate: [
                {
                    key: 'd1',
                    name: '삼성전자',
                    price: 84600,
                    chgp: 200,
                    chgr: 0.24,
                    color: 'pos'
                },
                {
                    key: 'd2',
                    name: '셀트리온',
                    price: 347500,
                    chgp: -8000,
                    chgr: -1.73,
                    color: 'nag'
                },
                {
                    key: 'd3',
                    name: '알파벳A',
                    price: 999000,
                    chgp: 34000,
                    chgr: 3.52,
                    color: 'pos'
                },
                {
                    key: 'd4',
                    name: '에스씨엠생명과학',
                    price: 41950,
                    chgp: 4350,
                    chgr: 11.57,
                    color: 'pos'
                },
            ]
        }
    ];

    let [tabTitle, setTabTitle] = useState(popularStockObj[0].watch);

    // 탭 클릭 > 데이터 및 css 변경
    const tabChange = (e) => {
        e.preventDefault();
        let liArr = document.querySelectorAll('.tab > li');
        liArr.forEach((item) => item.classList.remove('tabOn'));
        if(e.target.parentElement.nodeName == 'LI') {
            e.target.parentElement.classList.add('tabOn');
            let dataTitle = e.target.parentElement.dataset.title;
            setTabTitle(popularStockObj[0][dataTitle]);
        } else {
            liArr[0].classList.add('tabOn');
            setTabTitle(popularStockObj[0].watch);
        };
    };

    return (
        <>
            <ul className="tab" onClick={ tabChange }>
                <li className="tabOn" data-title="watch"><a href="#">조회</a></li>
                <li data-title="news"><a href="#">뉴스</a></li>
                <li data-title="debate"><a href="#">토론</a></li>
            </ul>
            <table className="list">
                <thead></thead>
                <tbody>
                    { tabTitle.map((item) => {
                        return (
                            <tr key={ item.key }>
                                <td>{ item.name }</td>
                                <td>{ item.price.toLocaleString() }</td>
                                <td className={ item.color }>{ item.chgp.toLocaleString() }</td>
                                <td className={ item.color }>{ item.chgr.toFixed(2) + "%" }</td>
                            </tr>
                        );
                    }) }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    );
};

export default PopularStock;