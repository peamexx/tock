import SearchList from './SearchList';
import { useState } from 'react';
import JSONDATA from '../json/aboard.json';

function Search() {
    let [searchStock, setSearchStock] = useState('');

    const searchItem = (e) => {
        setSearchStock(e.target.value);
    }

    return (
        <div className="find">
            <div className="inner">
                <div className="fixed">
                    <ul className="tab">
                        <li><a href="#">전체</a></li>
                        <li><a href="#">국내주식</a></li>
                        <li><a href="#">해외주식</a></li>
                        <li><a href="#">기타</a></li>
                        <li><a href="#">가상자산</a></li>
                    </ul>
                    <div className="search">
                        <input type="text" className="searchBox" placeholder="종목명/종목코드/심볼/시장이름" onChange={ searchItem }/>
                    </div>
                </div>
                <table className="findList">
                    { JSONDATA.filter((item) => {
                        if(searchStock == '') {
                            return item;
                        } else if(item.name.toUpperCase().includes(searchStock.toUpperCase())) {
                            return item;
                        } else if(item.code.toUpperCase().includes(searchStock.toUpperCase())) {
                            return item;
                        } else if(item.market.toUpperCase().includes(searchStock.toUpperCase())) {
                            return item;
                        };
                    }).map((item) => 
                        <SearchList 
                            name={ item.name }
                            code={ item.code }
                            market={ item.market }
                        />
                    ) }
                </table>
            </div>
        </div>
    );
};

export default Search;