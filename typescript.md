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

## TS의 클래스
    Class 클래스?
    ES2015 부터 등장
    C#에서 많이 유래됨
    JS 클래스와 TS 클래스가 조금 다르다.

    ```typescript
    //파스칼케이드 문자가 끊길때마다 대문자
    class Person = {
        name: string;
        age: number;
        //readonly 속성 private??
        readonly location: string
    }

    const p = new = Person();
    // p는 인스턴스; 메모리에 할당된 고유한 것
    ```

+ 생성자 ;초기화를 담당한다.
    ```typescript
    class Person = {
        name: string;
        age: number;
        //readonly 속성 private??
        readonly location: string

        constructor(name:string, age:number) {
            this.name = name;
            this.age = age;
        }
    }
    ```

+ 메소드 method ; 함수와 비슷 객체의 행동을 의미
    ```typescript
    class Person = {
        name: string;
        age: number;
        readonly location: string

        constructor(name:string, age:number) {
            this.name = name;
            this.age = age;
        }

        information(): string{
            return `${this.name}의 나이는 ${this.age}살입니다.`;
        }
    }
    ```
+ 제어자 getter setter
    ```typescript
    class Person = {
        name: string;
        private _age: number; 

        constructor(name:string, age:number) {
            this.name = name;
            this._age = age;
        }

        get age(){
            if(this._age === 0){
                return "설정되지 않음";
            }
            return this.age;
        }

        set age(age){
            if(typeof age !== number){
                this._age = 0;
            }
            this._age = age;
        }
    }

    const p = new Person("JANG",20);
    console.log(p.age);
    ```

+ Extends 상속 / 확장
    ```typescript
    class 기본 {
        result(){
            return 'Base';
        }
    }

    class 파생 extends 기본{
        //오버라이딩 덮어쓰기
        result(){
            return "DERIVEED";
        }

    }

    const de = new 파생();
    de.result();
    // BASE 출력
    ```

+ Super 생성자 상위 클래스  
JS에서도 사용가능

    ```typescript
    class Animal {
        name:string;

        constructor(name: string){
            this.name = name;
        }

        sayName(){
            return "동물? " + this.name;
        }
    }

    class Person extends Animal {
        constructor(name:string){
            super(name);
            //super는 this 전에 사용되어야 한다.
        }

        sayName(){
            return "사람? " + this.name;
        }
    }
    ```

+ 접근제어자 ;속성과 메서드에 접근을 제한할 수 있다.  
    API 흉내 및 규칙 강제  
    public private protected 모두 타입스크립트 고유 문법  
    JS 자체의 private도 존재한다.
    
    ```typescript
    class Person {
        public name: string;
        private age: number;
        //서버클래스까지 접근 가능
        protected gender: "M" | "F";

        constructor(name: string, age: number, gender: "M" | "F"){
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        sayName(){
            return this.name;
        }

        protected sayAge(){
            return this.age;
        }

        private sayGender(){
            return this.gender;
        }
    }

    class Me {
        constructor(name: string, age: number, gender: "M" | "F"){
            super(name,age,gender);
        }

        sayInfo(){
            return super.sayName() + super.sayAge(); //여기선 서브클래스라 에러 안남 
            //sayGender는 나타나지도 않음
        }
    }

    const p = new Person("JANG", 10, "M");
    p.sayAge() 는 에러가 난다 접근제어자로 인해

    ```
+ static JS에서도 가능  
    인스턴스화 하지않고 사용가능 전역에 생성?   
    new로 인스턴스화 하지않기 때문에 조심해야한다.  
    ```typescript
    class StaticClass {
        type = "Type";

        test(){

        }
    }

    StaticClass. 아무것도 접근 불가능

    class StaticClass {
        static type = "Type";

        static test(){

        }
    }

    StaticClass. 이제 접근 가능
    ```

+ ReadOnly  
    수정 막는 역할
    ```typescript
    const Person {
        name: string;
        readonly age: number;

        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }

        set함수로도 변경안됨
        . 으로도 변경 안됨
    }
    ```

+ 추상 클래스  
    JS에는 없다. 객체지향에서 많이 쓰임  
    abstract를 선언한 클래스 직접 인스턴스화 될 수 없는 클래스
    추상클래스의 메소드는 무조건 구현

    ```typescript
    class Animal{
        hello()

        run(){
            return this.hell() + "  run!";
        }
    }

    //직접 인스턴스화 안된다. new Animal 안되게
    abstract class Animal{
        abstract hello(): string

        run(){
            return this.hell() + "  run!";
        }
    }

    class Person extends Animal{
        // hello를 꼭 구현해야한다.
        hello(){
            return "HELLO FROM PERSON";
        }
    }
    const person = new Person();
    ```

+ 매개변수 parameter properties  
    ```typescript
    //안그래도 귀찮았던 생성자 매개변수 쓰기 귀찮았는데;
    class Person{
        constructor(
            public name: string,
            private age: number,
            protected gender: "M" | "f"
        ){ 매우 편해짐
    }
    ```

+ 메소드 오버라이딩  
    ; 매우 객체지향적임을 알 수 있다.
    ```typescript
    class Animal {
        run(){
            return "Animal이 달리다.';
        }
    }

    class Person extends Animal {

    }

    const p = new Person()
    console.log(p.run());
    ```

## 인터페이스
JS에는 없어  
객체의 타입을 정의하고 생김새를 가지도록 할 수 있다.  
implements로 구현한다

```typescript
interface
인터페이스는 정의 설계를 한다
implement
구현한다

// 바로 중가로 할당하지않아
interface Person {
    name: string
    age: number
}

//바로 사용되는 법
const jang: Person = {
    //person에 name과 age필요해짐
    name: "JANG",
    age:99
}

```
implements
```typescript

interface Person {
    name: string
    run(): void
}

class Jang implements Person {
    //설계에 맞는 구현을 해야함
    constructor(
        name: string
    ){}

    run(){
        console.log(this.name)
    }
}

// 더 많이 구현??????
interface Animal {
    name: string
    run(): string
}

interface Person{
    sayName(): string
}

// 아 더 추가할 수 있다는 뜻이구나 다중 인터페이스
class JANG implements Animal, Person {
    constructor(
        name: string
    ){}

    run(){
        console.log(this.name)
    }

    sayName() {
        return "aaaa";
    }
}
```

extends와 interface
```typescript
interface Animal{
    name?: string // ?는 꼭 넣을 필요없다.
    run(): string
}
interface Person extends Animal{
    sayName(): string
    // extends 키워드 사용시 충돌 가능성이 있다.
    // 그래서 제네릭이 있는데 그건 이후에
}

const jang:Person = {
    name: "JANG",
    run() {
        return "sfdsf";
    },
    sayName() {
        return "afdwv";
    }
}
```

## 타입가드
    타입을 좁혀나가기 위한 과정
    typeof 이미 JS에 존재
```typescript
function print(value:number | string):string{
    if(typeof value === 'number') return String(value);
    if(typeof value === 'string') return value;

    // number 도 string도 아닐때
    return value;
}
typeof를 활용한 타입가드 흐름을 제어하기위해 
```
in 연산자를 활용한 타입가드 JS에 이미 있음  
객체가 특정 속성을 가지고 있는지 검사를 불리언으로 반환
```typescript
interface Dog{
    name: string
    bark(): "BARKBARK"
}

interface Cat{
    name: string
    meow(): "MEOW"
}

function sayAnimal(animal: Dog | Cat){
    if("bark" in animal){
        animal.bark();
    }

    if("meow" in animal){
        animal.meow();
    }
}

```

instanceof  
체이닝을 통해 객체검사를 함.
```typescript
//프로토타입의 체인을 검사함
function getDate(date: Date | string): Date{
    if(date instanceof Date){
        return date
    }

    return new Date(date);
}
```
사용자 정의 커스텀 타입가드  
타입가드의 아쉬운 점 타입스크립트 다운 타입가드을 아직 모름
```typescript
function isDate(date: Date | string): date is Date{
    return date instanceof Date;
}
function getDate(date: Date | string): Date{
    if(isDate(date)){
        return date
    }

    return new Date(date);
}
```

