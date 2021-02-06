import { Add, ImportExport, Create } from '@material-ui/icons';
import { useState } from 'react';
import Item from './Item';

function Favorite() {

  let stockItem = [
    {
      name: '삼성전자',
      code: '005930',
      sub: 15,
      price: 84600,
      volumn: 19961566,
      chgp: 200,
      chgr: 0.24,
      upDown: 'pos',
    },
    {
      name: 'NAVER',
      code: '035420',
      sub: 20,
      price: 370500,
      volumn: 1193960,
      chgp: 8000,
      chgr: 2.21,
      upDown: 'pos',
    },
    {
      name: '셀트리온',
      code: '068270',
      sub: 0,
      price: 347500,
      volumn: 1886521,
      chgp: -8000,
      chgr: -2.25,
      upDown: 'nag',
    },
    {
      name: '헬릭스미스',
      code: '084990',
      sub: -1,
      price: 30500,
      volumn: 1597540,
      chgp: -900,
      chgr: -2.87,
      upDown: 'nag',
    },
    {
      name: 'SK하이닉스',
      code: '000660',
      sub: 0,
      price: 130000,
      volumn: 3675298,
      chgp: 0,
      chgr: 0,
      upDown: '',
    },
  ];

  let [stock, setStock] = useState(stockItem);

  const sortListOn = () => {document.querySelector('.layer').classList.add('on')};

  // 현재가
  const upPrice = () => {
    let sorted = [...stock].sort((a, b) => b.price - a.price);
    setStock(sorted);
    document.querySelector('.layer').classList.remove('on');
  };

  // 거래량
  const upVolumn = () => {
    let sorted = [...stock].sort((a, b) => b.volumn - a.volumn);
    setStock(sorted);
    document.querySelector('.layer').classList.remove('on');
  };

  // 등락률
  const upChgr = () => {
    let sorted = [...stock].sort((a, b) => b.chgr - a.chgr);
    setStock(sorted);
    document.querySelector('.layer').classList.remove('on');
  };

  // 등락
  const upChgp = () => {
    let sorted = [...stock].sort((a, b) => b.chgp - a.chgp);
    setStock(sorted);
    document.querySelector('.layer').classList.remove('on');
  };

  // 이름
  const upName = () => {
    let sorted = [...stock].sort((a, b) => a.name > b.name ? 1 : -1);
    setStock(sorted);
    document.querySelector('.layer').classList.remove('on');
  };

  return (
    <div className="favorite">
      <div className="inner">
        <div className="setting">
          <ul>
            <li><Add fontSize="large"/><span>종목추가</span></li>
            <li onClick={ sortListOn }><ImportExport fontSize="large"/><span>정렬</span></li>
            <li><Create fontSize="large"/><span>변경</span></li>
          </ul>
        </div>
        <div className="list">
          <table>
            { stock.map((item) => 
              <Item 
              name={ item.name } 
              code={ item.code } 
              price={ item.price.toLocaleString() } 
              volumn={ item.volumn.toLocaleString() }
              chgp={ item.chgp }
              chgr={ item.chgr }
              upDown={ item.upDown }
              sub={ item.sub }
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
