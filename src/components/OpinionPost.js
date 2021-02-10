import { useState } from 'react';
import OpinionReplys from './OpinionReplys';

function OpinionPost() {

    // .head 내용 불러오기
    let subject = localStorage.getItem('subject0');
    let stockName = localStorage.getItem('stockName0');
    let name = localStorage.getItem('name0');
    let title = localStorage.getItem('title0');
    let replyCount = Number(localStorage.getItem('replyCount0'));
    let date = localStorage.getItem('date0');

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
        let textarea = document.querySelector('textarea');

        if(inputName.value === '' || textarea.value === '') {
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
            let input = document.createElement('input');
            let button = document.createElement('button');
            let button2 = document.createElement('button');
            button.textContent = '수정';
            button.onclick = modifySubmit;
            button2.textContent = '취소';
            button2.classList.add('close');
            button2.onclick = modifyOff;
            div.append(input);
            div.append(button);
            div.append(button2);
            li.append(div);

            contents.append(li);
    
            setTotalRplysCnt(totalRplysCnt + 1);
        }
    };

    // 댓글 수정 영역 오픈
    const modifyOn = (e) => {
        let parent = e.target.parentElement; // li
        let modify = parent.querySelector('.modify');
        modify.classList.toggle('on');
    };

    // 댓글 수정 영역 > 취소
    const modifyOff = (e) => {
        if(e.target.className == 'close') {
            e.target.parentElement.classList.remove('on');
        }
    };

    // 댓글 수정 영역 > 수정
    const modifySubmit = (e) => {
        let input = e.target.previousElementSibling;
        let p = e.target.parentElement.previousElementSibling;
        p.textContent = input.value;
        input.value = '';
        e.target.parentElement.classList.remove('on');
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
                            <pre>
                                21/2/1 월요일 오늘의 마감시황.<br />
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
                            </pre>
                        </p>
                    </div>
                    <div className="recommend">
                        <button className="likes" onClick={ incrementCount }>공감 <span className="num">{ likesBtn }</span></button>
                        <button className="dislikes" onClick={ incrementCount }>비공감 <span className="num">{ dislikesBtn }</span></button>
                    </div>
                </div>
                <div className="reply">
                    <p className="tit">전체 댓글 <span className="num">[{ totalRplysCnt }]</span></p>
                    <ul className="contents">
                        <OpinionReplys />
                    </ul>
                </div>
                <div className="writeBox">
                    <div className="top">
                        <label>닉네임</label><input type="text" className="inputName"/>
                        <label>비밀번호</label><input type="password" className="inputPw"/>
                    </div>
                    <div className="bottom">
                        <textarea name="" id="" className="textarea"></textarea>
                    </div>
                    <button onClick={ replySubmit }>댓글쓰기</button>
                </div>
            </div>
        </div>
    );

    // function Modify() {
    //     return (
    //         <div className="layer">
    //             <div className="box">
    //                 <textarea name="" id="" cols="30" rows="10"></textarea>
    //                 <button>수정</button>
    //             </div>
    //       </div>
    //     );
    // }
};

export default OpinionPost;