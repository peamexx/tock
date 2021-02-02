import { Add, ImportExport, Create } from '@material-ui/icons';
import Item from './Item';

function Favorite() {
  return (
    <div className="favorite">
      <div className="inner">
        <div className="setting">
          <ul>
            <li><Add fontSize="large"/><span>종목추가</span></li>
            <li><ImportExport fontSize="large"/></li>
            <li><Create fontSize="large"/></li>
          </ul>
        </div>
        <div className="list">
          <table>
            <Item />
            <Item />
            <Item />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
