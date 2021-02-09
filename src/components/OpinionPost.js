import {useState} from 'react';

function OpinionPost() {

    let subject = localStorage.getItem('subject0');
    let stockName = localStorage.getItem('stockName0');
    let name = localStorage.getItem('name0');
    let title = localStorage.getItem('title0');
    let replyCount = localStorage.getItem('replyCount0');
    let date = localStorage.getItem('date0');

    let [likesBtn, setLikesBtn] = useState(17);
    let [dislikesBtn, setDislikesBtn] = useState(9);

    const incrementCount = (e) => {
        if(e.target.className == 'likes') {
            setLikesBtn((likesBtn) => likesBtn + 1);
        } else {
            setDislikesBtn((dislikesBtn) => dislikesBtn + 1);
        }
    };

    return (
        <div className="opinionPost">
            <div className="inner">
                <div className="post">
                    <div className="head">
                        <div className="top">
                            <span className="subject">{ subject }</span>
                            <span className="tit">
                                <strong className="stockName">{ stockName }</strong>
                                <span className="title">{ title }</span>
                                <span className="replyCount">[{ replyCount }]</span>
                            </span>
                        </div>
                        <div className="bottom">
                            <span className="name">{ name }</span>
                            <span className="date">{ date }</span>
                        </div>
                    </div>
                    <div className="contents">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, delectus dignissimos neque similique asperiores sunt commodi illum velit ab ex quos hic accusamus quas molestias repudiandae, voluptatibus autem error aut sed libero. Fugiat assumenda at vero ullam earum cupiditate similique accusantium quasi veniam architecto porro, dolore hic odit voluptatibus pariatur.</p>
                    </div>
                    <div className="recommend">
                        <button className="likes" onClick={ incrementCount }>공감 <span className="num">{ likesBtn }</span></button>
                        <button className="dislikes" onClick={ incrementCount }>비공감 <span className="num">{ dislikesBtn }</span></button>
                    </div>
                </div>
                <div className="reply">
                    <p className="tit">전체 댓글</p>
                    <ul className="contents">
                        <li>
                            <span className="name">1687기★</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, vel?</p>
                        </li>
                        <li>
                            <span className="name">1687기★</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magni sunt accusamus qui dolorum, deleniti nesciunt rem ex nemo eveniet facere laudantium consectetur soluta provident quas voluptatibus nostrum ipsam error voluptates fuga dolore harum. Laboriosam vel corporis voluptatum voluptatem ullam accusantium quasi exercitationem mollitia alias in. Velit laudantium voluptatibus et?</p>
                        </li>
                        <li>
                            <span className="name">1687기★</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, vel?</p>
                        </li>
                        <li>
                            <span className="name">1687기★</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, vel?</p>
                        </li>
                        <li>
                            <span className="name">1687기★</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, vel?</p>
                        </li>
                        <li>
                            <span className="name">1687기★</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, vel?</p>
                        </li>
                    </ul>
                </div>
                <div className="writeBox">
                    <div className="top">
                        <label>닉네임</label><input type="text"/>
                        <label>비밀번호</label><input type="text"/>
                    </div>
                    <div className="bottom">
                        <textarea name="" id=""></textarea>
                    </div>
                    <button>댓글쓰기</button>
                </div>
            </div>
        </div>
    );
}

export default OpinionPost;