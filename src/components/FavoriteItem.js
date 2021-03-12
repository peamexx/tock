import Delay from './Delay';
import { Link } from 'react-router-dom';

function FavoriteItem(props) {  
  return (
    <div className="table">
      <Link to="/stock=105467">
        <div className={ "item " + props.color + ` c${props.code}` } key={ props.id }>
            <div className="bar">
              <span className="line"></span>
              <span className="box"></span>
            </div>
            <div className="tit">
              <strong>{ props.name }</strong>
              <span className="code">{ props.code }</span>
              <Delay delay={ props.delay } />
            </div>
            <div className="num">
              <p className="price">{ props.price }</p>
              <p className="volumn">{ props.volumn }</p>
            </div>
            <div className="changeNum">
              <p className="chgp">{ props.chgp }</p>
              <p className="chgr">{ props.chgr }%</p>
            </div>
        </div>
      </Link>
    </div>
  );
}

export default FavoriteItem;
