import { useState } from 'react';
import OpinionReplys from './OpinionReplys';

function OpinionPost() {

    // .head 내용 불러오기
    let subject = localStorage.getItem('subject');
    let stockName = localStorage.getItem('stockName');
    let name = localStorage.getItem('name');
    let title = localStorage.getItem('title');
    let replyCount = Number(localStorage.getItem('replyCount'));
    let date = localStorage.getItem('date');

    let [likesBtn, setLikesBtn] = useState(17);
    let [dislikesBtn, setDislikesBtn] = useState(9);
    let [totalRplysCnt, setTotalRplysCnt] = useState(replyCount);

    // 공감 비공감 카운트
    const incrementCount = (e) => {
        if(e.target.className == 'likes' || e.target.parentElement.className == 'likes') {
            setLikesBtn((likesBtn) => likesBtn + 1);
        } else {
            setDislikesBtn((dislikesBtn) => dislikesBtn + 1);
        }
    };

    // 댓글 쓰기
    const replySubmit = () => {
        let contents = document.querySelector('.reply').querySelector('.contents');
        let inputName = document.querySelector('.inputName');
        let inputPw = document.querySelector('.inputPw');
        let textarea = document.querySelector('textarea');

        if(inputName.value === '' || inputPw.value === '' || textarea.value === '') {
            alert('빈칸을 입력해주세요.');
        } else {
            let li = document.createElement('li');
            let span = document.createElement('span');
            let span2 = document.createElement('span');
            span.classList.add('name');
            span.textContent = inputName.value;
            span2.textContent = '댓글 수정';
            span2.classList.add('toModify');
            span2.onclick = modifyOn;
            li.append(span);
            li.append(span2);

            let p = document.createElement('p');
            p.textContent = textarea.value;
            li.append(p);

            // 댓글 수정 영역
            let div = document.createElement('div');
            div.classList.add('modify');
            let input = document.createElement('input'); // 내용
            let button = document.createElement('button'); // 수정
            let button2 = document.createElement('button'); // 취소
            let input2 = document.createElement('input'); // 비밀번호
            input.placeholder = '내용';
            button.textContent = '수정';
            button.onclick = modifySubmit;
            button2.textContent = '취소';
            button2.classList.add('close');
            button2.onclick = modifyOff;
            input2.placeholder = '비밀번호';
            input2.classList.add('writePwInput');
            div.append(input);
            div.append(button);
            div.append(button2);
            div.append(input2);
            li.append(div);

            contents.append(li);
    
            localStorage.setItem(inputName.value, inputPw.value);
            setTotalRplysCnt(totalRplysCnt + 1);
        }
    };

    // 댓글 수정 영역 오픈
    const modifyOn = (e) => {
        let parent = e.target.parentElement; // li
        let modify = parent.querySelector('.modify');
        modify.classList.toggle('on');
    };

    // 댓글 수정 영역 > 취소 버튼
    const modifyOff = (e) => {
        if(e.target.className == 'close') {
            e.target.parentElement.classList.remove('on');
        }
    };

    // 댓글 수정 영역 > 수정 버튼
    const modifySubmit = (e) => {
        let button = e.target // '수정' 버튼
        let userName = button.parentElement.parentElement.querySelector('.name').textContent; // 닉네임
        let userPw = localStorage.getItem(userName); // 댓글 작성시 비밀번호
        let writePwInput = e.target.parentElement.querySelector('.writePwInput').value; // 댓글 수정시 쓴 비밀번호

        let input = button.previousElementSibling; // 댓글 수정칸
        let p = button.parentElement.previousElementSibling; // 댓글 원본

        if(userPw !== writePwInput) {
            alert('패스워드를 다시 확인해주세요');
        } else if(input.value === '') {
            alert('내용을 입력해주세요');
        } else {
            p.textContent = input.value;
            input.value = '';
            p.value = '';
            e.target.parentElement.classList.remove('on');
        }
    };

    // 안내 문구 스타일
    const STYLE = {
        display: 'block',
        width: '100%',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#247fe0',
        color: '#fff'
    };

    return (
        <div className="opinionPost">
            <div className="inner">
                <h2 className="hidden">토론 게시물 내용</h2>
                <div className="post">
                    <div className="head">
                        <div className="top">
                            <span className="subject">{ subject }</span>
                            <span className="tit">
                                <strong className="stockName">{ stockName }</strong>
                                <span className="title">{ title }</span>
                                <span className="replyCount">[{ totalRplysCnt }]</span>
                            </span>
                        </div>
                        <div className="bottom">
                            <span className="name">{ name }</span>
                            <span className="date">{ date }</span>
                        </div>
                    </div>
                    <div className="contents">
                        <p>
                            <span style={ STYLE }><strong>안내: </strong>게시물 첫번째글인 <b>[삼성전자]2/1 마감 시황 안내★★★★★★★★★</b> 페이지로 일괄 처리됩니다</span><br />
                            /2/1 월요일 오늘의 마감시황!<br />
                            <br />
                            뉴욕 증시 상승세와 외국인 매수 우위 속에서 우리 증시는 하락세를 보입니다.<br />
                            <br />
                            - 기관 매도우위 1,543억원<br />
                            - 외국인 매수우위 2,274억원<br />
                            - 개인 매수우위 203억원<br />
                            <br />
                            기계(1.24%), 디지털컨텐츠(0.45%), 정보기기(1.11%) 상승<br />
                            반면 유통(-1,35%), 의료정밀(-0.8%), 섬유의복(-1.42%) 하락<br />
                            <br />
                            제가 보는 눈여겨 볼만한 종목은 다음과 같습니다!<br />
                            - 삼성전자 005930<br /> 
                            - 넷마블 251270<br />
                            - 한국가구 004590<br />
                            - 한국단자 025540<br />
                            <br />
                            유용했다면 공감버튼 클릭 부탁드립니다.<br />
                        </p>
                    </div>
                    <div className="recommend">
                        <button className="likes" onClick={ incrementCount }>공감 <span className="num">{ likesBtn }</span></button>
                        <button className="dislikes" onClick={ incrementCount }>비공감 <span className="num">{ dislikesBtn }</span></button>
                    </div>
                </div>
                <div className="reply">
                    <h3 className="hidden">댓글 목록</h3>
                    <p className="tit">전체 댓글 <span className="num">[{ totalRplysCnt }]</span></p>
                    <ul className="contents">
                        <OpinionReplys />
                    </ul>
                </div>
                <div className="writeBox">
                    <h3 className="hidden">댓글 달기</h3>
                    <div className="top">
                        <label>닉네임</label><input type="text" className="inputName"/>
                        <label>비밀번호</label><input type="password" className="inputPw"/>
                    </div>
                    <div className="bottom">
                        <textarea name="" id="" className="textarea" placeholder="내용"></textarea>
                    </div>
                    <button onClick={ replySubmit }>댓글쓰기</button>
                </div>
            </div>
        </div>
    );
};

export default OpinionPost;