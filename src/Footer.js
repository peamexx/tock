function Footer() {
  return (
    <div className="footer">
        <div className="inner">
          <h2 className="hidden">주요 서비스</h2>
          <ul>
              <li><a href="/">홈</a></li>
              <li><a href="/favorite">관심목록</a></li>
              <li><a href="/search">종목검색</a></li>
              <li><a href="/opinion">토론</a></li>
          </ul>
        </div>
    </div>
  );
}

export default Footer;
