import axios from 'axios'
import { useState, useEffect } from 'react'
import StockEodItem from './StockEodItem'

function StockEod() {
    const apiUrl = 'http://api.marketstack.com/v1/eod';
    let apiSymbol = 'AAPL';
    let queryParams = '?access_key=' + '329f9ecb5ff8b44c0fafdea135a1beb0';
    queryParams += '&symbols=' + apiSymbol;

    let content;
    let ydaySymbol;
    let ydayClose;
    let exchange;
    let ydayVolume;
    let ydayOpen;
    let ydayHigh;
    let ydayLow;

    let [eodData, setEodData] = useState();

    // api 받기
    useEffect(() => {
        axios.get(apiUrl + queryParams)
            .then((response) => {
                setEodData(response.data);
            })
    }, [apiUrl]);

    // <!--api 형태-->
    // adj_close: 121.085 
    // adj_high: 122.06 
    // adj_low: 118.79 
    // adj_open: 119.03 
    // adj_volume: 129525780 
    // close: 121.085 
    // date: "2021-03-09T00:00:00+0000"
    // exchange: "XNAS" 
    // high: 122.06
    // low: 118.79
    // open: 119.03
    // symbol: "AAPL"
    // volume: 129525080

    if(eodData) { // api 데이터 다 불러오면 그 다음에 작업
        ydaySymbol = eodData.data[0].symbol; // 심볼
        ydayClose = eodData.data[0].adj_close.toFixed(2); // 최근 전일 종가
        exchange = eodData.data[0].exchange; // 거래소
        ydayVolume = eodData.data[0].adj_volume.toLocaleString(); // 최근 거래량
        ydayHigh = eodData.data[0].adj_high.toFixed(2); // 최근 고가
        ydayOpen = eodData.data[0].adj_open.toFixed(2); // 최근 전일 시가
        ydayLow = eodData.data[0].adj_low.toFixed(2); // 최근 저가

        if(exchange === 'XNAS') {
            exchange = 'NASDAQ';
        } else if(exchange === 'XNYS') {
            exchange = 'NYSE'
        };

        content = eodData.data.map((item, index, arr) => {
            if(index > arr.length - 2) return;

            // 전날 데이터(전일대비, 등락율 구하기 위해 필요)
            let prevData = arr[index + 1];

            // 날짜 변경 2021-03-09T00:00:00+0000 ---> 03/09
            let date = item.date;
            let month = date.slice(5, 7); // 03
            let day = date.slice(8, 10); // 09
            date = `${month}/${day}`;

            return <StockEodItem 
                    key={ item.volume }
                    id={ item.volume }
                    date={ date }
                    close={ item.adj_close.toFixed(2) }
                    chgp={ (item.adj_close - prevData.adj_close).toFixed(2) } // 오늘 종가 - 전일 종가
                    chgr={ ((((item.adj_close - prevData.adj_close) / item.close).toFixed(4)) * 100).toFixed(2) } // 전일대비 - 전일 종가
                    volume={ item.adj_volume.toLocaleString() }
                    />;
            });
        
        // let chgp = document.querySelectorAll('.chgp');
        // if(chgp[0]) {
        //     chgp.map((item) => {
        //         if(Number(item.textContent) < 0) {
        //             // item.classList.add('eieiei');
        //             console.log('음수')
        //         } else {
        //             console.log('양수?')
        //         }
        //     });
        // }
    } else {
        <span>데이터 로딩중입니다</span>
    };

    return (
        <div className="stockEod">
            <div className="inner">
                <div className="top">
                    <p>해당 페이지는 "애플" 종목 일별 페이지로 일괄 처리됩니다</p>
                </div>
                <div className="title">
                    <div className="left">
                        <span className="tit">애플</span>
                        <span className="sym">{ ydaySymbol }</span>
                        <span className="exchange">{ exchange }</span>
                    </div>
                    <div className="right">
                        <span className="open">{ ydayClose }</span>
                    </div>
                </div>
                <div className="titleDes">
                    <ul>
                        <li>
                            <span className="tit">거래량</span>
                            <span className="num">{ ydayVolume }</span>
                        </li>
                        <li>
                            <span className="tit">고가</span>
                            <span className="num">{ ydayHigh }</span>
                        </li>
                        <li>
                            <span className="tit">전일 시가</span>
                            <span className="num">{ ydayOpen }</span>
                        </li>
                        <li>
                            <span className="tit">저가</span>
                            <span className="num">{ ydayLow }</span>
                        </li>
                    </ul>
                </div>
                <div className="eodData">
                    <table>
                        <table></table>
                        <tr>
                            <th>일자</th>
                            <th>종가</th>
                            <th>전일대비</th>
                            <th>등락율</th>
                            <th>거래량</th>
                        </tr>
                        { content }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StockEod;