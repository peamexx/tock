import { Add, ImportExport, Create } from '@material-ui/icons';
import Item from './Item';

function Favorite() {

  let stockItem = [
    {
      name: '삼성전자',
      code: '005930',
      sub: false,
      price: 84600,
      volumn: 19961566,
      chgp: 200,
      chgr: 0.24,
    },
    {
      name: 'NAVER',
      code: '035420',
      sub: false,
      price: 370500,
      volumn: 1193960,
      chgp: 8000,
      chgr: 2.21,
    },
    {
      name: '셀트리온',
      code: '068270',
      sub: false,
      price: 347500,
      volumn: 1886521,
      chgp: 8000,
      chgr: -2.25,
    },
    {
      name: '헬릭스미스',
      code: '084990',
      sub: false,
      price: 30500,
      volumn: 1597540,
      chgp: 900,
      chgr: -2.87,
    },
    {
      name: 'SK하이닉스',
      code: '000660',
      sub: false,
      price: 130000,
      volumn: 3675298,
      chgp: 0,
      chgr: 0,
    },
  ],;

  return (
    <div className="favorite">
      <div className="inner">
        <div className="setting">
          <ul>
            <li><Add fontSize="large"/><span>종목추가</span></li>
            <li><ImportExport fontSize="large"/><span>정렬</span></li>
            <li><Create fontSize="large"/><span>변경</span></li>
          </ul>
        </div>
        <div className="list">
          <table>
            <Item 
              name={ stockItem[0].name } 
              code={ stockItem[0].code } 
              price={ stockItem[0].price.toLocaleString() } 
              volumn={ stockItem[0].volumn.toLocaleString() }
              chgp={ stockItem[0].chgp }
              chgr={ stockItem[0].chgr }
            />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
