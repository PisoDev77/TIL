## TypeScript 설치
1. 전역환경구성(로컬 내PC)
    + Node.js 설치  
    + VSCode 설치  
        MS가 TS, VSCode 만듬
    + TS 전역설치
    ```terminal
    tsc : TypeScript Complier
    npm install -g typescript --dev
    ```

2. 프로젝트 별 환경 구성(폴더, 구성)


## tsc
```javascript
tsc 01.ts --declartion // 01.d.js 생성
tsc 01.ts // 01.js 생성
```

# Vite 
ESM 모듈(빠르다.)을 사용한다. 지원브라우저 확인하자.  

```terminal
npm create vite@latest zerobase-ts --template vanilla-ts
cd 해당 폴더
npm install
npm run dev
```
vite 프로젝트 만들기 시작


# JSDoc
문서화 도구

github  배포
Settings - Pages - docs 지정 - Save 배포 완료


# 제네릭
    어렵다고 많이 느낌 
    C# 및 Java에서 널리 사용되는 문법
    대규모 소프트웨어에 유연하게 사용할 수 있는 기능 제공
    <T> 꺽쇠가로 활용

```javascript
function getInfo(msg: string){
    return msg
}

console.log(getInfo("출력"));
//요구사항 추가 string | number
console.log(getInfo(2));
//요구사항 추가 string | number | number[] 
console.log(getInfo([1, 2]));
//요구사항 추가 string | number | number[] | stinrg[]
console.log(getInfo(["C", "T"]));
// 에이 any 써버려
```

```javascript
function getInfo<T>(msg: T): T{
    return msg;
}

function getInfo<타입 변수 지정>(msg: 타입인자): 타입 반환 {

}

console.log(getInfo<string>("출력"));
console.log(getInfo<number>(2));
console.log(getInfo<number[]>([1, 2]));
console.log(getInfo<string[]>(["C", "T"]));
```

## 함수에서의 제네릭
```javascript
type TypeGetInfoFunc = <T>(msg: T) => T
interface InterfaceGetInfoFunc {
    <T>(msg: T): T;
}

function getInfo<T>(msg:T):T{
    return msg
}

const TypeAliases:TypeGetInfoFunc = getInfo
const TypeInterface:InterfaceGetInfoFunc = getInfo

//에러 있음 
function getInfoMultiple<T1, T2>(msg: T1): T2{
    return msg
}

// 얘도 에러있는데?
function getInfoMultiple<T1, T2>(msg: [T1, T2]): [T1, T2]{
    return msg
}

getInfoMultiple<string, number>("str",123)
```

## 클래스에서의 제네릭

```javascript
class Animal<T, U>{
    name: T
    genderType: U
    constructor(name: T, genderType: U){
        this.name = name
        this.genderType = genderType
    }
}

const dog = new Animal<string, "M" | "F">("강아지", "M");
const cat = new Animal("고양이", "F");
```

```javascript
//타입좁히기 extends
function printMessage<T extends string | number>(msg: T){
    return msg
}

printMessage("HELLO");
// 이건 안됨
printMessage<string[]>(["1","2"]);
```