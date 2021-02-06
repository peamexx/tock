import { StockIndexKospi, StockIndexKosdaq, StockIndexSp500, StockIndexNasdaq } from './StockIndex';
import MostPopularNews from './MostPopularNews';

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
                <div className="section mostpopularNews">
                    <MostPopularNews />
                </div>    
            </div>
        </div>
    </div>
  );
}

export default Home;
