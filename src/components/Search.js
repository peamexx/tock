import SearchList from './SearchList';
import { useState, useEffect } from 'react';
import SEARCHDATA from '../json/searchData.json';

function Search() {

    useEffect(() => {
        document.title = '종목검색 - 다양한 종목 검색 지원'
    });

    let [searchStock, setSearchStock] = useState('');

    const searchItem = (e) => {
        setSearchStock(e.target.value);
    }

    return (
        <div className="search">
            <div className="inner">
                <h2 className="hidden">종목 검색</h2>
                <div className="fixed">
                    <div className="search">
                        <input type="text" className="searchBox" placeholder="종목명/종목코드/심볼/시장이름" onChange={ searchItem }/>
                    </div>
                </div>
                <table className="findList">
                    <thead></thead>
                    <tbody>
                        { SEARCHDATA.filter((item) => {
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
                            key={ item.key }
                            id={ item.key }
                            name={ item.name }
                            code={ item.code }
                            market={ item.market }
                            />
                        ) }
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    );
};

export default Search;