# CSS

## 색상과 배경

+ 색상  
    키워드 ex) red, blue, transparent;(투명하게)  
    RGB 3차원 좌표계 사용  16진수 표기법 / HEX  
    rbga 알파값 추가 opacity를 줌  
      
    opacity 불투명도 기본값 1
+ 배경
    - background
    - 
    - 

## Grid
display : inline-grid  
외부 - 내부 모두 적용가능  

---

grid-template-columns | rows  
몇 개의 행과열을 가질것인지  
```css
ex1) grid-template-columns: 100px 150px 100px;  
ex2) grid-template-columns: 1fr 1fr 1fr;
ex3) grid-template-columns: repeat(4, 80px);
```
---

grid-template-areas  
여러개의 셀을 가질 수 있도록  
. 은 공백 
```css
    display: grid;
    grid-template-areas: 
        ". . b b b";

    section > h1{
    grid-area: b;
}
```
---

grid-auto-rows | grid-auto-columns  
지정된 template를 넘쳐날 때 사용되는 것들
```css
    grid-auto-rows: 100px;
    grid-auto-columns: 100px;
```

---

grid-auto-flow  
지정된 template를 넘쳐날 때 사용되는 것들
```css
    grid-auto-flow: row; 기본값 행 방향으로
     방향을 설정해 줄 수 있음
    grid-auto-flow: column; 열 방향으로
    grid-auto-flow: row dense; 
    여백을 메꿔주는 역할을 해줌 
```

---

grid(shorthand)  

```css
grid: auto-flow / 1fr 1fr 1fr;
grid: repeat(3, 80px) / auto-flow;     
```

---

justify-content | align-content

```css
선행조건 컨테이너 크기가 더 커서 남는 공간이 있어야함.
justify-content:등등 사용할 수 있음;

align-content:;    
```

---

justify-items | align-items

```css
하나의 아이템에 대한 정렬
하나의 요소 안에 어떻게 정렬할 것인가.
justify-items:;

align-items:;    
```

---

grid-row | grid-column  
하나의 요소에 설정하고 싶을 때
```css
    grid-row-start:1;
    grid-row-end:2;
    grid-row: 2 /span 2;

    grid-column-start:;
    grid-column-end:;
```

---

z-index  


---
