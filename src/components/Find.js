import FindItem from './FindItem';
import { useState } from 'react';
import JSONDATA from '../json/aboard.json';

function Find() {
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
                        <input type="text" className="searchBox" onChange={ searchItem }/>
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
                        <FindItem 
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

export default Find;