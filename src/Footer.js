import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <div className="inner">
          <h2 className="hidden">주요 서비스</h2>
          <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/favorite">관심목록</Link></li>
              <li><Link to="/search">종목검색</Link></li>
              <li><Link to="/board">토론</Link></li>
          </ul>
        </div>
    </div>
  );
}

export default Footer;
