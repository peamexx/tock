function OpinionPost() {
    return (
        <div className="opinionPost">
            <div className="inner">
                <div className="post">
                    <div className="head">
                        <div className="top">
                            <span className="subject">위클리 핫</span>
                            <span className="tit">
                                <strong className="stockName">[삼성전자]</strong>
                                <span className="title">삼전 개인 주주들</span>
                                <span className="replyCount">[15]</span>
                            </span>
                        </div>
                        <div className="bottom">
                            <span className="name">천진반</span>
                            <span className="date">2020/02/01 16:37</span>
                        </div>
                    </div>
                    <div className="contents">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, delectus dignissimos neque similique asperiores sunt commodi illum velit ab ex quos hic accusamus quas molestias repudiandae, voluptatibus autem error aut sed libero. Fugiat assumenda at vero ullam earum cupiditate similique accusantium quasi veniam architecto porro, dolore hic odit voluptatibus pariatur.</p>
                    </div>
                    <div className="recommend">
                        <button className="likes">공감 <span className="num">125</span></button>
                        <button className="dislikes">공감 <span className="num">105</span></button>
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