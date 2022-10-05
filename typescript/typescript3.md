## Index 타입

```javascript
type TodoId = Todo['id'];

interface StrInterface{
    [index: number]: string
    [index: string]: string
}

const Person: StrInterface = {
    99: '구구',
    '구구': "구구"
}

```

## 조건부 타입

```javascript
interface Person{
    name: string
}

interface Me extends Person{
    age: number
}

type Ex1 = Me extends Person ? string : number

class Galaxy{
    type = "AOS";
}
class IPhone {
    type = "IOS";
}

type MyDevice<T> = T extends 'IPhone' ? IPhone : Galaxy

let myPhone: MyDevice<'Galaxy'>
let myPhone: MyDevice<'IPhone'>
let myPhone: MyDevice<'Xiaomi'>

type IsNumberType = 123 extends number ? true : false
const isNumberType: IsNumberType = 

```

## (Mapped) 맵드 타입 다루기
```javascript
const newNum = [1,2,3].map((num) => num *2);

type StringOrNumber{
   [key: string]: string | number
}

const MixedType: StringOrNumber{
    one: 
}

type Person = {
    name: string
    age: number
    gender: string
}

type Dict<T> ={
    [key: string]: T
}

const newPerson: Dict<Person> = {}
newPerson.me

type NewRecord = {
    [key in 'you' | 'we']: Person
}

function printNewPerson(newPerson: NewReocord){
    newPerson.
}
```


## 선언병합
+ 동일한 이름으로 선언된 모두 하나의 정의로 병합

```javascript
interface Cat{
    name: string
}

interface Cat{
    age: number
}

const animal: Cat = {
    age: 99
    name: "cat"
}

interface Person {
    name: string
    age: number

}

const Person = {
    name:"jang"
    age:12
}

export {
    Person
}

class Car{
    createCar(): Car{
        return{
            name: 'Car'
        }
    }
}

namespace Car{
    function createCar(): Car{
        return Car.createCar()
    }
}

interface Car {
    name: string
    brandType?: string
}

export{
    Car
}
```

## 타입 단언
```javascript

const div = document.querySelector('ts') as HTMLDivElement;
const div2 = <HTMLDivElement>document.querySelector('ts');
// 컴퓨터는 알 수 없기에 강제로 assertion으로 
```
타입단언은 줄이자.

## never
```javascript
    function someError(msg: string): never{
        throw new Error(msg);
    }

    function func(param: string | number){
        if(typeof param === 'string'){

        }

        if (typeof param === 'number'){

        } else {
            //some never 제어흐름을 위해
        }

    }

    //never는 Union과 교차에서 활용될 수 있음
    type StrUnion = never | string
    
    // 교차에서는 덮어쓴다. 
    type NeverInter = never & string;
```
특이 케이시 반환이 없는 경우를 명시
예외를 던지거나 실행이 종료될 때 - void와는 다름

## keyof
JS에는 없는 타입연산자  
객체 타입의 키를 문자열 숫자 유니언 타입으로 생성

```javascript
    interface Size{
        width: number
        height: number
    }

    type S = keyof Size // 'width | height'

    function 
```

## 빈 값 관리하기

```javascript
// null 과 undefined
interface Home{
    foods?: string[]
    books?: string[]
}

const MyHome: Home = {
    //값이 있음을 TS에게 알린다.
    MyHome.foods!.push("FOOD");
}
```

## Type VS interface
```javascript
type extends가 안돼

type T
```

## 유틸리티 타입

내장빌트인 타입

### 

```javascript
    interface Person {
        name: string
        age: number
    }

//  미리 되어있다.
    type T = Partial<Person>
```
### Partial

```javascript
    interface Person {
        name: string
        age: number
        //선택적으로 타입을 선택할 수 있게 도와준다.
    }

    function getInfo (p: Person){
        //
        return p;
    }
    type T = Partial<Person>
```

### Required

```javascript
 모든 집합을 필수로 Partial과 반대
    interface Person {
        name: string
        age?: number
    }

    function getInfo (p: Required<Person>){
        //age도 넣어줘야함.
        return p;
    }
    type T = Required<Person>
```

### readonly

```javascript
 
    interface Person {
        name: string
        age?: number
    }

    const p: Readonly<Peson>{
        name: "aaa",
        age: 11
    }
    객체 자체를 Readonly로
```

### record

```javascript
type Path = 'a' | 'b' | 'c';

Record<key, type;value>
const navPath = Record<Path, string> = {
    a: "1",
    b: "2",
    c: "3",
}
```

### Omit

```javascript
Omit<type, keys> 불필요한 놈을 내보낼때
    interface Friends {
        name: string
        age: number
        gender: string
    }

    type BaseInfo = Omit<Friends, 'age'>
    age없이 가능핟.
```

### pick

```javascript
특정 객체에서 원하는 속성만 가져오기
Pick<type, keys >
    interface Friends {
        name: string
        age: number
        gender: string
    }

    type exam = Pick<Friends, 'age' | "name">
    name과 age 속성을 가진 타입 만듬
```

### Exclude

```javascript
Exclude<type, 제외할 유니온 타입> - 거의 유니언을 위해 존재
    type Animal = "M" | "F" | "A"

    type Person = Exclude<Animal, 'A' | "F" >
```

### Extract

```javascript
Extract<type, 교집합할 수 있는 유니언 멤버
    type exam = Extract<1|2|3, 3|4|5>  // 교집합 같은 것 3만 들어감

    type Person = Exclude<Animal, 'A' | "F" >
```

### NonNullable<타입>

```javascript
Extract<type, 교집합할 수 있는 유니언 멤버
null/undefined인 것을 지워줌

```

### parameters<type>

```javascript
함수의 매개변수에서 튜플타입을 생성

type Tuple1 = Parameters<<T>(param: T)=>T>
```

### returntype

```javascript
ReturnType<type>

type retur = ReturnType<()=> string>  // 아 이래서 setTimeout 이
```

### instance type

```javascript
class BaseClass{

}
const b = new BaseClass();

type In1 = InstanceType<typeof BaseClass>
```