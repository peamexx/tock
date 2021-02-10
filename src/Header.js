import { Dehaze } from '@material-ui/icons';

function Header() {
  return (
    <div className="header">
        <div className="inner">
            <Dehaze fontSize="large" />
            <h1 className="logo">
              <a href="/"><span>t</span>ock.</a>
            </h1>
        </div>
    </div>
  );
}

export default Header;
