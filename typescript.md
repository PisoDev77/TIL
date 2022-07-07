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
    ; 원시타입들로 undefined, null, any, unkown 등이 있다.
    ```typescript
    undefined나 null를 혼용하는 것은 지양하자.
    물론 두가지 다 타입지정가능하다.

    const nu:null = null;
    const un:undefined = undefined;

    any는 지양하자. any는 JS에서 동작과 다를 바 없다.
    접근가능한 범위가 매우 넓기 때문에, 조심할 필요가 있다.
    noImplicity 혹은 strict 옵션을 True로 타입스크립트 설정에 추가를 권장한다.

    unknown은 최상위 타입인데, 이는 any와 다르지 않지만
    타입가드나 assertion과 함께 좀 더 엄격한 코드가 작성가능하다.
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
    ; let과 const의 차이로 인한 것 같은데 타입스크립트에서의 특징은 아직 잘 모르겠다.
    ```typescript
    let letStr = "string";
    // string으로 선언된다. 재할당이 가능한 let이기 떄문에
    const constStr = "string"
    // "string" 값 자체로 선언된다.
    ```

+ 튜플 타입  
    ; 한 배열에 여러가지 자료형이 섞인 경우에 활용  
        __길이__ 고정 __인덱스__ 타입 고정  
    읽기전용으로 활용 가능하다.
    ```typescript
    const tuple = [];
    default tuple:(string | number) //유니온 나중에 나온다.
    tuple:[number, string] = [1,"str"]; // 길이 고정 / 타입 지정
    tuple:[number, ...string[]] = [0,"a","b"] // 길이 가변 _ 타입 지정
    ```

## 클래스
    Class 클래스?
    ㄴㄴㄴ
