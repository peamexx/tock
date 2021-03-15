import axios from 'axios'
import { useState, useEffect } from 'react'
import StockEodItem from './StockEodItem'

function StockEod() {
    const options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data',
        params: {symbol: 'AAPL', region: 'US'},
        headers: {
          'x-rapidapi-key': 'b1187ee220msh6d87d66445d6aa9p18f94bjsn8d17e3bafaa6',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };

    let content;
    let ydayClose;
    let ydayVolume;
    let ydayOpen;
    let ydayHigh;
    let ydayLow;

    let [eodData, setEodData] = useState();

    // api 받기
    useEffect(() => {
        axios.request(options).then((response) => {
            setEodData(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [options.url]);

    if(eodData) { // api 데이터 다 불러오면 그 다음에 작업
        ydayClose = eodData.prices[0].adjclose.toFixed(2); // 최근 전일 종가
        ydayVolume = eodData.prices[0].volume.toLocaleString(); // 최근 거래량
        ydayHigh = eodData.prices[0].high.toFixed(2); // 최근 고가
        ydayOpen = eodData.prices[0].open.toFixed(2); // 최근 전일 시가
        ydayLow = eodData.prices[0].low.toFixed(2); // 최근 저가

        content = eodData.prices.map((item, index, arr) => {
            if(index > arr.length - 2) return;

            // 전날 데이터(전일대비, 등락율 구하기 위해 필요)
            let prevData = arr[index + 1];

            return <StockEodItem 
                    key={ item.volume }
                    id={ item.volume }
                    date={ unixTimeConvert(item.date) }
                    close={ Number(item.adjclose).toFixed(2) }
                    chgp={ (item.adjclose - prevData.adjclose).toFixed(2) } // 전일대비 = 오늘 종가 - 전일 종가
                    chgr={ (((item.adjclose - prevData.adjclose) / item.adjclose).toFixed(4) * 100).toFixed(2) } // 등락율 = 전일대비 - 전일 종가
                    volume={ Number(item.volume).toLocaleString() }
                    />;
            });

        // 전일대비, 등락율이 음수/양수 ---> .nag/.pos 추가
        let chgpAll = document.querySelectorAll('.chgp');
        if(chgpAll) {
            console.log(chgpAll.length);
            chgpAll.forEach((item) => {
                if(Number(item.textContent) < 0) {
                    console.log(Number(item.textContent));
                    item.classList.add('nag');
                    item.parentElement.querySelector('.chgr').classList.add('nag'); // chgr
                } else if(Number(item.textContent) > 0) {
                    item.classList.add('pos');
                    item.parentElement.querySelector('.chgr').classList.add('pos'); // chgr
                };
            });
        } else {
            console.log('없음ㄴㄴㄴ')
        }
    } else {
        <span>데이터 로딩중입니다</span>
    };

    return (
        <div className="stockEod">
            <div className="inner">
                <div className="top">
                    <p>해당 페이지는 "애플" 종목 일별 페이지로 일괄 처리됩니다</p>
                </div>
                <div className="top top2">
                    <p>api 내려받는데 5초가량 시간이 걸립니다</p>
                </div>
                <div className="title">
                    <div className="left">
                        <span className="tit">애플</span>
                        <span className="sym">AAPL</span>
                        <span className="exchange">NASDAQ</span>
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
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>일자</th>
                                <th>종가</th>
                                <th>전일대비</th>
                                <th>등락율</th>
                                <th>거래량</th>
                            </tr>
                            { content }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

function unixTimeConvert(dataPara) {
    let date = new Date(dataPara * 1000);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1);
    let day = date.getDate();

    let timeConvered = `${year}/${month}/${day}`;
    return timeConvered;
};

export default StockEod;