___

React.js를 활용한 주식 시세 사이트.

[미리보기](https://peamexx.github.io/tock/)

___

### 사용 기술
- Javascript
- SASS
___

### 메뉴
1. 홈
2. 관심목록
3. 종목검색
4. 토론

___

### 1. 홈
- 차트 (주요 국내/해외 지수)

**export { 여러개 } 사용**

StockIndex.js 파일에서 여러 컴포넌트를 export하여 호출.

- 탭 (인기 종목)

**useState 사용**

데이터 및 탭 CSS 동시에 변경.

___

### 2. 관심목록
- 종목 데이터

**props 사용**

하위 컴포넌트에 데이터 노출.

- 정렬

**useState 사용**

선택 옵션에 맞는 데이터 순서 노출.

___

### 3. 종목검색
- 종목 데이터

**json 사용**

json 파일로 데이터 노출.

- 검색

**useState, filter() 사용**

자음 하나마다 filter 적용하여 검색.

___

### 4. 토론
- 공감/비공감 버튼, 전체 댓글 개수

**useState 사용**

- 댓글 수정

**Javascript DOM 활용**