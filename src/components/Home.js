import { StockIndexKospi, StockIndexKosdaq, StockIndexSp500, StockIndexNasdaq } from './StockIndex';
import PopularNews from './PopularNews';
import PopularStock from './PopularStock';

function Home() {
  return (
    <div className="home">
        <div className="notice">
            <div className="inner">
                <div className="section stockIndex">
                    <h3>주요 국내/해외지수</h3>
                    <div className="domestic">
                        <StockIndexKospi />
                        <StockIndexKosdaq />
                    </div>
                    <div className="usa">
                        <StockIndexSp500 />
                        <StockIndexNasdaq />
                    </div>
                </div>
                <div className="section popularNews">
                    <h3>가장 많이 본 뉴스</h3>
                    <PopularNews />
                </div>    
                <div className="section populerStock">
                    <h3>인기 종목</h3>
                    <PopularStock />
                </div>  
            </div>
        </div>
    </div>
  );
}

export default Home;
