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