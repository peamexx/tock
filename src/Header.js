import { Dehaze } from '@material-ui/icons';

function Header() {
  return (
    <div className="header">
        <div className="inner">
            <Dehaze fontSize="large" />
            {/* nav 완성 필요 */}
            <h1 className="logo"><span>t</span>ock.</h1>
        </div>
    </div>
  );
}

export default Header;
