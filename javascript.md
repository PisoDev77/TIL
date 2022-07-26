# JavaScript

## Promise
객체이며 비동기 작업을 도와줌  
결과의 실패와 완료 여부를 알려줌

- 대기
- 이행
- 거부


* Stream 스트림
    
# Event 이벤트
    Event    
+ ## Debouncing 디바운싱  
    Debouncing
    
    
+ ## 쓰로틀링
    

# 스프레드 연산자

+ [7가지 ES6 스프레드 연산자 트릭]()  
    ES6는 점 3개 ... 스프레드 연산자가 있다.  
    1. 배열의 push()를 사용하는 더 나은 방법  
        일반적으로 apply 메소드로 배열을 채운다.
        ```javascript
        const arr = ["a", "b"];
        arr.push.apply(arr, ["c","d"]);
        console.log(arr);
        ```
        스프레드 연산자를 이용해서 같은 결과를 얻을 수 있다.
        ```javascript
        const arr = ["a", "b"];
        arr.push(...["c","d"]);
        console.log(arr);
        ```
    2. 배열 복사하기

        ```javascript
        const arr = ["a","b","c","d"];
        const copyArr1 = arr.slice(0);
        const copyArr2 = [...arr];
        copyArr1[2] = "f1";
        copyArr2[2] = "f2";
        console.log(arr);

        //스프레드는 배열자체를 요소로 복사한다.
        //그래서 결과값이 안의 배열은 변화된 값으로 나타난다.
        const arr2 = [1,2,[3,4]];
        const copyArr21 = [...arr2];
        copyArr21[2][0] = 5;
        console.log(arr2);
        ```
    3. 배열에서 중복값 제거
        배열의 중복값들을 set 데이터 구조와 스프레드를 이용해 제거할 수 있다.
        ~~어떻게? set 데이터구조는 뭔데?~~  
        Set 데이터 구조는 자료형에 관계 없이 원시 값과 객체 참조 모두 __유일한__ 값을 저장할 수 있다.
        ```javascript
        const arr = ["a", "a", "b", "b"];
        const uniqueArr = [...new Set(arr)];
        console.log(uniqueArr);
        ```
    4. 복수 배열 연결하기
        여러배열을 이어 붙일 수 있다.
        ```javascript
        const arr1 = ["a", "b"];
        const arr2 = ["c", "d"];
        const arr = [...arr1, ...arr2];
        console.log(arr);
        ```
    5. NodeList를 진짜 배열로 변환
         ```javascript
        const $divs = document.querySelectorAll("div");
        const $arrDivs = [...$divs];
        console.log(Array.isArray($divs), Array.isArray($arrDivs));
        ```
    6. 구조 분해 할당
        스프레드 연산자는 배열과 객체의 구조 분해 할당에 사용된다.

        ```javascript
        const [a, ...others] = ["a","b","c","d"];
        console.log(a);
        console.log(others);

        //얘는 에러야 rest때문에    
        const [...others,b,...others2]= ["a","b","c","d"];
        console.log(others);
        console.log(b);
        console.log(others2s);
         //rest의 개념도 확인해두자
        ```

    7. 문자열을 배열로 변환하기
        문자열이 배열로 변환된다.
        ```javascript
        const str = "abcdefg";
        const strArr = [...str];
         //rest의 개념도 확인해두자
        ```

## Observer Pattern
    Subscriber, Listener 등으로도 불리며 
    일어나는지 지켜보는 것을 옵저버 패턴이라 함.


## !! 논리 연산자


## 클로져
스코프
- 전역
- 지역

### 이떄 클로져는 
    내부함수가 외부함수의 맥락에 접근할 수 있는 것

불필요한 전역변수를 줄이고
코드 재사용성 높이고
실수 방지