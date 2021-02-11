import { ImportExport, Search } from '@material-ui/icons';
import { useState } from 'react';
import FavoriteItem from './FavoriteItem';

function Favorite() {

  let stockArr = [
    {
      name: '삼성전자',
      code: '005930',
      delay: 0,
      price: 84600,
      volumn: 19961566,
      chgp: 200,
      chgr: 0.24,
      color: 'pos',
    },
    {
      name: 'NAVER',
      code: '035420',
      delay: 0,
      price: 370500,
      volumn: 1193960,
      chgp: 8000,
      chgr: 2.21,
      color: 'pos',
    },
    {
      name: 'E-Mini 나스닥 100',
      code: '992028',
      delay: -1,
      price: 13394.25,
      volumn: 495,
      chgp: 54.75,
      chgr: 0.41,
      color: 'nag',
    },
    {
      name: '셀트리온',
      code: '068270',
      delay: 0,
      price: 347500,
      volumn: 1886521,
      chgp: -8000,
      chgr: -2.25,
      color: 'nag',
    },
    {
      name: '니케이255',
      code: '990411',
      delay: 20,
      price: 28646.50,
      volumn: 839840700,
      chgp: 284.33,
      chgr: 1.00,
      color: 'pos',
    },
    {
      name: 'SK하이닉스',
      code: '000660',
      delay: 0,
      price: 130000,
      volumn: 3675298,
      chgp: 0,
      chgr: 0,
      color: '',
    },
    {
      name: '페이스북',
      code: 'FB',
      delay: 15,
      price: 266.65,
      volumn: 14223377,
      chgp: 0.4300,
      chgr: 0.16,
      color: 'nag',
    },
  ];

  let layer = document.querySelector('.layer');

  let [stock, setStock] = useState(stockArr);

  // Modal 오픈
  const sortListOn = (e) => {
    let layer = document.querySelector('.layer');
    layer.classList.add('on');
    layer.addEventListener('click', (e) => {
      if(e.target === layer) {
        layer.classList.remove('on');
      }
    });
  };

  // 현재가
  const upPrice = () => {
    let sorted = [...stock].sort((a, b) => b.price - a.price);
    setStock(sorted);
    layer.classList.remove('on');
  };

  // 거래량
  const upVolumn = () => {
    let sorted = [...stock].sort((a, b) => b.volumn - a.volumn);
    setStock(sorted);
    layer.classList.remove('on');
  };

  // 등락률
  const upChgr = () => {
    let sorted = [...stock].sort((a, b) => b.chgr - a.chgr);
    setStock(sorted);
    layer.classList.remove('on');
  };

  // 등락
  const upChgp = () => {
    let sorted = [...stock].sort((a, b) => b.chgp - a.chgp);
    setStock(sorted);
    layer.classList.remove('on');
  };

  // 이름
  const upName = () => {
    let sorted = [...stock].sort((a, b) => a.name > b.name ? 1 : -1);
    setStock(sorted);
    layer.classList.remove('on');
  };

  return (
    <div className="favorite">
      <div className="inner">
        <div className="setting">
          <ul>
            <li><a href="/search"><Search fontSize="large"/><span>종목검색</span></a></li>
            <li onClick={ sortListOn }><ImportExport fontSize="large"/><span>정렬</span></li>
          </ul>
        </div>
        <div className="list">
          <table>
            { stock.map((item) => 
              <FavoriteItem 
              name={ item.name } 
              code={ item.code } 
              price={ item.price.toLocaleString() } 
              volumn={ item.volumn.toLocaleString() }
              chgp={ item.chgp }
              chgr={ item.chgr.toFixed(2) }
              color={ item.color }
              delay={ item.delay }
              />
            ) }
          </table>
        </div>
        <Modal />
      </div>
    </div>
  );

  function Modal() {
    return (
      <div className="layer">
        <ul className="sortList">
          <li onClick={ upPrice }>현재가</li>
          <li onClick={ upVolumn }>거래량</li>
          <li onClick={ upChgr }>등락률</li>
          <li onClick={ upChgp }>등락</li>
          <li onClick={ upName }>이름</li>
        </ul>
      </div>
    );
  };
}

export default Favorite;
