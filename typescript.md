# TS | TypeScript | 타입스크립트
    과거에는 JS의 Super Set
    현재는 타입 구문이 있는 JS
    결국에 JS로 변환하게 되어 NodeJS 브라우저 등에 사용가능하다.

## 기본타입
+ type anootation   
    ; 타입 어노테이션을 통해 변수에 자료형을 먹일 수 있다.
    ```typescript
    const val = '123';

    (: 자료형) === 타입 어노테이션
    const 변수명: 자료형 = 'value';
    const val:number = '123'
    에러가 뜬다
    ```
+ 원시 타입 (Primitive Value)  
    ; JS에서 이미 많이 가지고 있는 기본 자료형들
    ```typescript
    const str:string = 'str';
    const num:number = 123;
    const bool:boolean = false;
    const big:bigint = 100n;
    // 다른 값이 들어올 경우 에러가 난다.

    const str:'string' = 'STRING' //에러
    const num:123 = 123;
    const bool:true = true;

    // 기본값을 지정할 수도 있다.]
    ```

+ 객체 타입  
    ; 객체에 리터럴를 활용하여 타입을 지정할 수 있다.
    ```typescript
    const obj:{str1:string, str2:string} = {
        str1: "Hello",
        str2: "world"
    }

    const obj:object 는 별 의미가 없다.

    // 객체 안 객체
    const obj:
    {
        str:string,
        child:{
            childStr:string
        }
    } 
    = 
    {
        str:"HELLO IM OBJ",
        child: {
            childStr: "IM CHILD"
        }
    }
    ```

+ 함수 타입  
    ; 함수 타입은 2가지를 생각한다. 1.매개변수 2. 반환
    ```typescript
    const func = (str:string, num:number): void => {
        매개변수에 타입지정, 반환 void 로 반환값 없는 타입 지정
        console.log(str,num);
    }
    ```

+ 배열 타입  
    ; 배열 타입은 한가지 타입 배열로 타입 지정
    ```typescript
    const arr = [1,2,3];

    const arr:number[] = [1,2,3];
    const arr:Array<number> = [1,2,3];

    // 둘이 같은 의미이다.
    ```

+ 리터럴 타입

+ 튜플 타입