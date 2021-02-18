import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notFound">
        <div className="inner">
            <span>
                <p>페이지를 찾을 수 없습니다.</p>
                <button type="button"><Link to="/">첫화면으로 돌아가기</Link></button>
            </span>
        </div>
    </div>
  );
}

export default NotFound;
