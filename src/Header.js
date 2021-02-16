import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
        <div className="inner">
            <h1 className="logo">
              <Link to="/"><span>t</span>ock.</Link>
            </h1>
        </div>
    </div>
  );
}

export default Header;
