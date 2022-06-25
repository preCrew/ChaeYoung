# Typescript

</br>

## 목차
1. [타입스크립트?](#타입스크립트)
2. 문법   
    [1. 기본타입](#1-기본-타입)   
    [2. 함수타입](#2-함수-타입)   
    [3. 인터페이스](#3-인터페이스)   
    [4. 타입별칭(type aliases)](#4-타입별칭type-aliases)   
    [5. 연사자를 이용한 타입](#5-연사자를-이용한-타입)   
    [6. 이넘 enum](#6-이넘-enum)   
    [7. 클래스 Class](#7-클래스)   
    [8. 제네릭(Generics)](#8-제네릭)   
    [9. 타입추론](#9-타입추론)   
    [10. 타입호환](#10-타입호환)
1. 사용하기   
   [1. 모듈](#1-모듈)   
   [2. d.ts](#2-dts)
2. config   
    [tsconfig.json](#tsconfigjson)
3. ETC
</br>

### ✍플러그인 목록
- tslint, eslint
</br></br>


## 타입스크립트

-타입스크립트는 자바스크립트에 타입을 부여한 언어

-컴파일 해줌
</br></br>

## 타입스크립트를 쓰면 좋은가?

1. 에러 방지

api로 객체를 받았다. 해당 객체에서 첫번째 값의 name속성을 알려고 한다 -> name 속성을 입력했지만 값은 undefined이다. 타입스크립트를 쓰면 이런 경우를 잡아준다. 브라우저를 일일이 열지 않고 코드에서 에러발견 가능

2. 에러 사전 방지 , 자동화 완성 가능(개발 생산성 향상)
````
function add(a:number,b:number):number{
    return a+b
}
var result = add(10,20) //number
result.toLocalseString()//ts가 result를 number라고 인식 후 api 자동화 제공
````
함수의 인자값을 넣을때 type을 지정하면 에러를 사전 방지 할 수 있따.

</br></br>

## 타입스크립트 시작하기 (타입스크립트 라이브러리 설치)
1.node 설치

2.npm i typescript -g

3.tsc index.ts[파일이름]

4.js 파일 생긴거 확인(컴파일)

5.tsc 파일이름 -w (ts파일을 감시)

> 매번 tsc를 쓰기보단 웹팩을 활용하자
> 
</br></br>

## tsconfig.json
[설정방법](https://www.typescriptlang.org/docs/handbook/compiler-options.html )
</br></br>

## 문법
## 1. 기본 타입
- 문자열
````javascript
let str: string = "안뇽~"
````
- 숫자
````javascript
let num: number = 10
````
- any

-모든 타입 허용   
-타입을 지정하기 애매할 경우 사용

````javascript
let num: any = 10
````
- void

-함수의 반환값이 없을때 사용   
-변수의 경우 null or undefind

````javascript
let num: any = 10
````
- 배열
````javascript
let arr: Array<number> = 10
let arr: number[] = 10
let arr: object[] = [ {id:1} ]
````
- 튜플

배열에 타입이 하나하나 지정되어 있다.
````javascript
let arr: [string,number] = '나는야',2
````
- 객체
````javascript
let obj: object = {
    name:'cy',
    age:20
}
````
but! 위 처럼 하면 타입스크립트는 그냥 단순히 얘는 객체네 하고 넘어감.   
세세하게 속성에 타입을 지정할 수 있다
````javascript
let obj: {name: string,age: number} = {
    name:'cy',
    age:20
}
````
<br>
<br>

## 2. 함수 타입
- 파라미터
```javascript
function sum(a: number,b: number){
    return a + b
}
```
- 반환 값
```javascript
function sum(a: number,b: number):number{
    return a + b
}
```
*타입스크립트는 파라미터를 제한하는 특성을 가지고 있다   
파라미터 값은 2개이고 인자가 4개라면???   
타입스크립트 : 윔마!! 인자가 4개잖아 난 2개의 타입만 가지고 있거든 다시 작성해줄래?*
````javascript
function sum(a: number,b: number):number{
    return a + b
}
sum(2,10,20,30)// 에러
````
-옵셔널 파라미터    
````javascript
function sum(a: number,b: number,c?:number):number{
    
}
sum(2,10)
sum(2,10,30)
````
?를 넣어주면 3번째 인자를 넣을지 말지 선택적으로 타입이 설정 가능하다.   
인자값을 2개만 넣어도 에러가 일어나지 않는다

- 함수 파라미터에 객체 타입 지정
```javascript
function sum( {a: number,b: string} ): void{
    console.log('?')
}
sum({a:2,b:'cy'})
```
함수 파라미터에 객체의 속성 타입을 자세히 타이핑해줄 수 있다.

<br>
<br>

## 3. 인터페이스
상호간의 약속한 규칙!!   
우린 이 속성의 타입을 인터페이스 oo 으로 쓰기로 약속했어 그러니까 이 인터페이스의 속성대로 정의해줘!!
- 변수에 인터페이스 사용

```javascript
    interface User {
        name: string,
        age: number
    }

    // User인터페이스를 사용하므로 User에 정의된 타입을 꼭 작성해준다
    const cy: User = {
        name: 'cy',
        age: 20
    }
```
- 함수에 인터페이스 사용

파라미터에 인터페이스를 적용.   
함수의 인자에 인터페이스의 타입과 일치하게 정의 되었는지 확인.
```javascript
interface User {
    name: string,
    age: number
}
// 파라미터에 인터페이스 적용
function UserInfo(info: User){
    console.log(info)
}
const UserObj = {
    name: 'cy',
    age: 20
}
UserInfo(UserObj) // 객체가 인터페이스와 타입이 일치하는지 체크
````
- 함수에 스펙(파라미터,반환 타입)

````javascript
interface User{
    (name: string, nickname: string): string 
} 
let UserFunc: User;
UserFunc = function(name: string, nickname: string): string{
    return `${name}의 별명은 ${nickname} 입니다`
}
UserFunc({'cy','chaeng'})
````
- 인터페이스 확장   

상속자의 타입 까지 정의해줘야 한다!
````javascript
interface Person {
    name: string,
    age: number
}
interface Developer extends Person {
    language: string
}
let obj: Developer  = {
    name:'cy',
    age:20,
    language:'ts'
}
````
<br/>
<br/>

## 4. 타입별칭(type aliases)   
특정 타입이나 인터페이스를 참조 할 수 있는 특정 변수!   
= 으로 정의

````javascript
// 변수
type myString = string;
const MyStr: myString = 'cy';

type Person = {
    name: string;
    age: number;
}
const obj: Person = {
    name: 'cy',
    age: 20
}
````
*타입 별칭은 드래그 했을때 쉽게 타입을 어떻게 정의 했는지 프리뷰가 가능하다*   
>type interface의 가장 큰 차이점은 확장이다. 인터페이스는 확장이 가능하지만 type은 확장이 안된다

<br/>
<br/>

## 5. 연사자를 이용한 타입
### 1) 유니온타입

하나 이상의 타입을 사용하는것   
a 타입이거나 b타입 이면 ~ 

````javascript
function logMsg(value: string | number){
    console.log(value)
}
logMsg('start')
logMsg(10)
````

- 유니온 타입의 장점   
    1. 파라미터나 변수에 한가지 이상의 타입을 쓰고 싶은 경우 사용
    2. 타입가드 (타입을 좁혀나가는 과정)


````javascript
function logMsg(value: string | number){
    if(typeof value === 'string' ){
        value.tostring() // 타입에 관련된 api 자동완성이 된다
    }
    if(typeof value === 'number' ){
        value.toFixed()
    }    
}
logMsg('start')
logMsg(10)
````
> 파라미터 타입이 any라면 명확하지가 않아서 자동완성이 되지 않음   

<br/>

### 2) 인터섹션타입
타입 모두를 만족하는 것(합집합)

````javascript
interface Skill {
    language: string
}

interface Person {
    name: string,
    age: number
}

function infoCard(info: Skill & Person){
    info.name
    info.language
    info.age
}
infoCard({
    name:'cy',
    age:20,
    //language:'ts' 에러가 남 왜냐하면 skill Person 모두 만족하는 값을 넣어줘야하는데 Person만 만족하는 상태임
})
````

<br/>
<br/>

## 6. 이넘 enum
특정값들의 집합

- 숫자형 이넘   
별도의 값을 쓰지 않으면 숫자로 출력 (0,1,2,3...)
````javascript
enum Cloths{
    Shoes,
    Tshirt,
    Pants,
}

console.log(Cloths.Pants) // 2
````

- 문자형 이넘   
값을 집어넣으면 문자로 출력
````javascript
enum Cloths{
    Shoes = '신발',
    Tshirt = '티셔츠',
    Pants = '바지',
}
const buy = Cloths.Pants
console.log(Cloths.Pants) // 바지
````
- 리버스 매핑   
1. Cloths.Pants 키와 값으로 출력   
2. Cloths[buy] 값으로도 키값 출력

<br/>
<br/>

## 7. 클래스

````
???
````

<br/>
<br/>

## 8. 제네릭
- 타입을 함수의 파라미터처럼 사용하는것
- 재사용이 높은 컴포넌트를 만들때 주로 사용
- 여러가지 타입에서 동작하는 컴포넌트를 생성할때 유용
- 함수를 호출하는 시점에 ?? 타입으로 사용할거야 라고 정의
- 받는 타입으로 그 타입을 추론해 반환값 까지 적용

````javascript
//일반함수
function getText(text){
    return text
}
getText('hi') // hi
getText(2) // 2

//제네릭
function getText<T>(text: T): T{
    return text
}

getText<string>('hi')
getText<number>(2)
````
> 일반함수는 파라미터에 어떤 값이든 들어가지만 제네릭을 사용 할 경우 함수를 호출한 시점에 정의한 타입만 값으로 들어 갈 수 있다

<br/>

### 1) 제네릭을 사용하는 이유
- 유니온 타입의 문제

````javascript
function getText(text: string | number){
    return text
}
const a = getText('abcd')
console.log( a.charAt(1) ) // error
````
유니온타입으로 string 또는 number에 해당하는 타입을 설정해놨기 때문에 a변수에 string api함수를 활용 할 경우 타입스크립트에서 에러가 난다. 정확히 string의 타입이 아니기 때문!

````javascript
function getText<T>(text: T): T{
    return text
}
const a = getText<string>('abcd') // string 타입만 받음
console.log( a.charAt(1) )
````
-유니온 타입의 단점은 보완   
-함수의 중복사용 가능(함수가 중복인데 값이 다른경우..?)

<br>

### 2) 제네릭 타입 변수

````javascript
function logText<T>(text: T[]): T[] {//T라는 변수를 받고 배열 형태다
  console.log(text.length); 
  return text;
}
logText<number>([1,2])
````
### 3) 인터페이스에 제네릭 선언

- 제네릭 사용전   
공통된 속성의 타입을 다르게 설정함 으로써 중복되는 인터페이스가 많다.

````javascript
interface UserName{
    info: string,
    login: boolean,
}

interface UserPhone{
    info: number,
    login: boolean,
}

const UserNameSelect: UserName[] = [
    {info: 'cy', login: true},
    {info: 'suzy', login: false},
]

const UserPhoneSelect: UserPhone[] = [
    {info: 12364567, login: true},
    {info: 56568755, login: false},  
]
````
- 제네릭 사용  
제네릭으로 중복사용 정리

````javascript
interface UserInfo<T>{
    info: T,
    login: boolean,
}

const UserNameSelect: UserInfo<string>[] = [
    {info: 'cy',login: true},
    {info: 'suzy',login: false},  
]
const UserPhoneSelect: UserInfo<number>[] = [
    {info: 12364567,login: true},
    {info: 56568755,login: false},  
]
````

<br/>
<br/>

## 9. 타입추론
타입스크립트가 타입을 추론해 나간다
````javascript
function sum(b = 10){ //sum(b?: number): string
    return b + 'hi'
}
````
타입스크립트는 반환값 타입이 string 이라고 추측.   
자바스크립트 특성상 숫자 + 문자를 하면 string이 기 때문이다.

- best common type   
````javascript
const arr = [0,true,null] //const arr: (number | boolean | null)[]
````
arr 은 number 나 boolean null 일것이다! 유니온타입처럼 추론하는것!


<br/>
<br/>

## 10. 타입호환
-타입에 정의되어 있는 속성의 타입이 맞으면 호환된다.   
-class interface 끼리도 상관없다. 그냥 타입만 맞으면 ok

````javascript
interface Developer {
    name: string;
    skil:string;
}
interface Person {
    name: string;
}
var developer: Developer;
var person: Person;

developer = person // error!! person에 skil이 없다
````
- 구조적 타이핑
````javascript
var add = function(a:number){
    console.log(a)
}
var sum = function(a:number,b:number){
    console.log(a)  
}
add = sum //add 가 더 파라미터 값이 많기때문에 호환 안됨
sum = add //sum에 add 의 속성을 가지고 있기 때문에 호환
````
<br/>
<br/>

## 사용하기
## 1. 모듈
-타입스크립트 모듈은 es6 모듈과 같다
-tsconfig.js 에서 어떻게 컴파일 할지 모듈 변경 가능

````javascript
//app.ts
import { Todo } from './types' 

var item: Todo = {
    title:'할일1',
    checked: false,
}

//types.ts
export interface Todo{
    title: string;
    checked: boolean;
}

````

<br/>

## 2. d.ts
타입스크립트의 추론을 돕는 파일 