![logo](http://peamexx.com/img/titleImg.jpg)

> React.js를 활용한 주식 시세 사이트.

![pc version](http://peamexx.com/img/pcp.jpg)

![mobile version](http://peamexx.com/img/mom.jpg)

[미리보기](https://peamexx.github.io/tock/)

*블로그 [peamexx.tistory.com](http://peamexx.tistory.com)*

*이메일 peamexx@daum.net*

✨✨✨
[전체 포트폴리오 보기](https://peamexx.github.io/me/)
✨✨✨

___

### 특징 🧚🏻‍♀️
- 반응형
- 웹 접근성 고려
___

### 사용 기술 🤸🤸‍♂️
- Javascript
- HTML / SCSS
___

### 메뉴 👩🏻‍💻
1. 홈
2. 관심목록
3. 종목검색
4. 토론

___

### 페이지 별 사용 기능 🔥
| 메뉴  | 사용 기능 |
| ------------- |:-------------:|
| 홈      | 1. 인기 종목 (useState)     |
| 관심목록      | 1. 종목 데이터 (props)<br /> 2. 정렬 옵션(useState)     |
| 종목검색      | 1. 종목 데이터 (json)<br /> 2. 검색(useState)     |
| 토론      | 1. 공감/비공감 버튼, 전체 댓글 개수 (useState)<br /> 2. 댓글 작성 및 수정(Javascript DOM) |

___

### 상세 내용 🔥🔥

- 접근성
    - H2 tag: 스크린리더기가 읽을 수 있는 화면 탐색용 텍스트 숨김 처리.
    - modal div: 팝업 시 스크린리더가 본문 내용 탐색을 멈추고 modal로 포커스를 할 수 있도록 처리.
    - button: 디자인 타입일 경우 type="button" 별도 명시.
    - color css: 저시력 및 색각 이상 이용자를 위해 해시코드 대신 rgb 활용.

- 홈
    - 주요 국내/해외지수: 하위 컴포넌트에서 여러 차트 정보를 export.
    - 인기 종목: useState로 탭 별로 해당하는 노출 데이터 및 css 변경.

- 관심목록
    - 종목 데이터: props 활용하여 데이터 노출.
    - 정렬: useState로 해당하는 옵션 값에 맞게 데이터 순서 변경.
   
- 종목검색
    - 종목 데이터: json 활용하여 데이터 노출.
    - 검색: useState로 자음 별로 해당하는 데이터 노출('삼' 검색 시 '삼'으로 시작하는 데이터 바로 출력)

- 토론
    - 공감/비공감 버튼, 전체 댓글 개수 카운트: useState 활용하여 데이터 노출 및 변경.
    - 댓글 작성 및 수정: Javascript DOM, localStorage로 댓글 추가 및 수정 옵션 처리.

___

### 추가하고 싶은 기능 👀
- [X] Javascript DOM 사용
- [X] localStorage, json 사용
- [ ] 페이지 이동 시 스크롤 리셋
- [X] 종목검색 - 검색 시 자음마다 종목 찾기
- [X] 접근성 권고 사항
- [ ] 댓글 입력 시 비밀번호 한글 입력한거 영어로 자동변환
