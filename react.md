# React

## 리액트 가상 DOM을 활용하여 상태관리를 용이케 하는 자바스크립트 라이브러리이다.

## 바닐라 프로젝트에 React를 추가하는 법
    스크립트 태그 복붙 리액트 공식문서 참조
    1. DOM 커테이너 설치
    2. script 태그 추가
    3. React 컴포넌트 만들기

## CRA ( create-react-app )
Node 14.0.0 혹은 상위 버전 npm 5.6 상위 버전 필요
```terminal
    npx create-react-app myapp
```
package.json 먼저 확인하자
npm start


## CRA 없이
+   Babel 
    es6로 변환해주는 역할을 했었음
+   Jsx and React 
react, react-dom, Babel 설정
```terminal
    npm init
    npm install react react-dom
```
src 폴더 추가
    components 폴더 추가
        FollowButton.js 추가
    index.js 추가
public 폴더 추가
    index.html

```terminal
    npm i -D @babel/core @babel/core @babel/preset-react
```

## JSX
JSX 자바스크립트를 확장한 문법.

## State 상태
setState 컴포넌트의 re-rendering을 발생시킨다.
```react
    const [cnt, setCnt] = useState(0);

    return(
        <div>
            <button onClick={() => {setCnt(cnt + 1)}}>+</button>
            <h1>Counter: {cnt} !!</h1> 
        </div>
    )
```

## immutable 불변성
불변성을 지킨다 === 메모리 영역의 값을 직접적으로 변경하지 않는다.  
setState 이전 상태와 이후 상태가 다르면 re-render  
Shallow Compare ???  
Object 와 원시타입들

## State VS Props
Props 부포 컴포넌트가 자식에게 전달하는 값  
State 자신이 즉 컴포넌트가 스스로 관리  
둘의 공통점 값 변경시 렌더링 

## State 올바르게 사용하기 심화편
직접 state 수정하지 말 것 ex) setState 통해서  
  
State 업데이트는 비동기적일 수도 있다.  
모아서 한번에 업데이트하는데 현재 state로 병합?  
Object.assign()객체 병합

## 단방향 데이터 흐름
모든 state는 특정한 컴포넌트가 소유

## State 끌어올리기
원래 자식요소에 있던 state를 부모에게 prop으로 받을 수 있게 끌어올리는 방법

## Hook
useState는 Hook의 하나  
재사용문제 때문에 생겨남.  
복잡한 컴포넌트는 이해하기 어렵고 class는 사람과 기계를 혼동시킴.  


## Effect Hook useEffect

```javascript
    // componentDidMount 처럼 동작 
    // mount 후 동작
    useEffect(() => {

    }, [])
    // 이 배열을 의존성 배열이라 부름

    // componentDidMount + componentDidUpdate 처럼 동작 
    useEffect(() => {

    })

    //WillUnmount는 어떻게?
    useEffect(() => {
        return () => {
            //d여기가 unMount시 실행
            cleanup;
        }
    }, [])
```


## 리스트
Array.prototype.map 을 이용하여 사용가능 리스트와 key 공식문서 참조


