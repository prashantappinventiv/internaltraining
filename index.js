/*
console.log("Hello,world programme")
var name ="prashant";
console.log(name);


function variable()
{
    var name="ram";
    console.log(name);
    
    function inner()
    {
        var input=5;
        console.log(name);
        console.log(input);
    }
    console.log(name);
   
    inner();
}
console.log(name);
variable();

function greet(){
    let a=6;
    function insidee()
    {
        if(a==5)
        {
            console.log("hello");
        }
        else
        {
            var b=4;
        }
        console.log(b);
    }
insidee();
}
greet();


let name="prashant sharma";
console.log(name.length);
console.log(name[name.length-2]);


let firstName="   prashant sharma   "
console.log(firstName);
console.log(firstName.trim());
console.log(firstName.length);


let name="prashnt";
console.log(name.toUpperCase());
console.log(name);


let newString=name.slice(0,name.length-2);
console.log(newString);

//conversion number to string
let age=22;
console.log(typeof age);

age=age +"";
console.log(typeof age);


let newStirng=+"22";
console.log(typeof newStirng);

console.log(typeof newStirng);



//Template string

let name="prashant";
let sirname="sharma";
console.log(`my name is ${name} and sir name is ${sirname}`);



let variable=null;
console.log(typeof variable);


let variable=undefined;
console.log(typeof variable);


let mynumber=BigInt(12);
console.log(mynumber.MAX_SAFE_INTEGER);


//BREAK KEYWOERd

for(let i=0;i<10;i++)
{
    if (i==4)
    {
        continue;
    }
    console.log(i);
}

const expression="appl";
switch(expression)
{
    case 'orange':
        console.log("this is orange");
        break;
    case 'mango':
    console.log("this is mango");
    break;
    case 'apple':
    console.log("this is apple");
    break;
    default:
        console.log("sorry wrong choice");
}


let i=0;
while(i<10)
{
    console.log(i);
    i++;
}

let i=1;
do{
    
    console.log(i);
    i++;s
}while(i<10);


const arr=[1,2,3,4,5];
console.log(arr);

let mixed=[1,2,'fp','mango',null];
console.log(Array.isArray(mixed));
let obj={};
console.log(Array.isArray(obj))
*/

let arr=[1,2,3,4,5,6]
/*arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(1);
console.log(arr);


let remove=arr.shift();
console.log(arr);
console.log(Array.isArray(remove));

//primitive tyoe
let num1=5;
let num2=num1;
console.log(num1);
console.log(num2);
num1++;
console.log("after increment");
console.log(num1);
console.log(num2);


//refrence tyoe

let array1=[2,3,4,5,6];
let array2=array1;
console.log(array1);
console.log(array2);
array1.push(1);
console.log(array1);
console.log(array2);


//clonning into an array
let array1=['item1','item2'];
let array2=array1.slice(0);
console.log(array1);
console.log(array2);


let array1=[12,2,3,4,5];
let array2=[...array1];
console.log(array1);
console.log(array2);
console.log(array1==array2);
array1.push(100);
console.log(array1)
console.log(array2)


//concatenation 
let array1=[1,2,3,4,5];
let array2=array1.slice(0).concat([5,6]);
console.log(array1);
console.log(array2);


let array1=[2,3,4,5,6,7];
let array2=[3,4,5,6,7];
let newArray=array1.concat(array2);
console.log(newArray);

//for of loop

let fruits=['apple','mango','grapes','papaya'];
let fruits2=[];
for(let fruit of fruits)
{
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits);
console.log(fruits2);

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

let fruit=["apple","mango","grapes"];
let fruits2=[];
for(let index in fruit)
{
    fruits2.push(fruit[index].toUpperCase());
}
console.log(fruit);
console.log(fruits2);

const person={
    name:'parshit',
    age:23,
    hobbies:['guitar','tabla','listening music']
}
console.log(person.hobbies);
for(let key in person)
{
    console.log(`${key}:${person[key]}`);
}

const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
  };
  
  const newObject = { ...obj2, ...obj1, key69: "value69" };
  console.log(newObject);

 const person=[
    {id:'1',name:'prashant',age:23},
    {id:'2',name:'arpit',age:34},
    {id:'3',name:'shivam',age:24}
 ]
 console.log(Array.isArray(person));
 for(let user of person)
 {
    console.log(user.name);
 }

//function declaration
function Hello()
{
    console.log("hello this is my fuction");
    function inside()
    {
        console.log("it is inside the fuction");
    }
    inside();
}
Hello();


//function expression

const first=function(){
    console.log("this is function expression");
}
first();


const isEven=function(number){
    return number%2==0;
}
const result=isEven(4);
console.log(result);

const isEven=number=> number%2==0
const ans=isEven(8);
console.log(ans);

const sumThree=(a,b,c)=>a+b+c
const ans=sumThree(4,5,6);
console.log(ans);


//lexical scope
const value=45;
function myfun()
{
function insideFun(){
    console.log(value);
}
insideFun();
}
myfun();

///hoisting
hello();
function hello()
{
    console.log("welcome");
}
//default parameter

function myFun(a,b=0)
{
    console.log(a);
    console.log(b);
}
myFun(3);

//rest parameter
function Rest(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);

}
Rest(3,4,4,5,6,7,8,9,9,4,5,6);

//callback function
function myFun()
{
    console.log("top function");
}

function insideFun(callback)
{
    console.log("callback function is calling");
    callback();
}
insideFun(myFun);


function Execute()
{
    const a=12;
    const b=15;
    console.log(`the value is ${a} and second value is ${b}`);
}

function second(callback)
{
    console.log("second function is executing");
    callback();
}
second(Execute);


//function returning function

function App()
{
    function Hello()
    {
        console.log("hello is calling")
    }
    return Hello;
}
const ans=App();
console.log(ans);
ans();


const numbers=[2,3,4,56,7];
function myfunction(number,index)
{
    console.log(`the value is ${number}and indexing is ${index}`)
}
numbers.forEach(functon(number,index){
    
console.log(number,index);
})


const number=[1,2,3,4,5];

const square=function(numbers)
{
    return numbers*numbers;
}
const squareNumber=number.map((number,index)=>{
    return index;
})
console.log(squareNumber);


const user=[{firstName:'prashant',age:23},
{firstNamae:'arpit',age:25},
{
    firstName:'shivam',age:27
}
]

const Name=user.map((arr)=>{
return arr.firstName;
})
console.log(Name);

const number=[2,3,4,5,6,7]
const result=number.filter((array)=>{
    return array%2==0
})
console.log(result);

const number=[2,3,4,5,6,7,8]
const sum=number.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
})
console.log(sum);



const array=[56,23,34,12,78,87,9]
const result=array.sort((a,b)=>{
return a-b;
})
console.log(result)


const array=[2,3,4,5,6,7]
array.fill(0,3,6)
console.log(array)


const array=[2,3,4,5,6,7]
for(let number of array){
console.log(number);
}

const string="prashant"
for(let char of string){
    console.log(char);
}

const items=['item1','item2','item3']
const number=new Set(items)
number.add(1);
number.add(2);
console.log(number);
if(number.has=='item1')
{
    console.log('item is present')
}
else
{
    console.log("item is not presenet")
}


const person=new Map();
person.set('firstname','prashant')
person.set('lastname','sharma');
person.set('age',23)
console.log(person)
console.log(person.get('firstname'))

//optional chaining
const user={
    firstName:'prashant',
    address:'sector62'
}
console.log(user.firstName)
console.log(user?.address)



function information()
{
    console.log (`the nameof person is${this.name} and age is ${this.age}`)
}

const person1={
    name:'prashant',
    age:23,
    about:information
}

const person2={
    name:'arpit',
    age:23,
    about:information
}

const person3={
    name:'shivam',
    age:23,
    about:information
}
person3.about();

const person={
 fullname:function()
{
    return this.firstname+" "+this.lastname
}
}

const user1={
    firstname:'prashant',
    lastname:'sharma'
   
}

const user2={

    firstname:'arpit',
    lastname:'sharma'
}
const result=person.fullname.call(user2);
console.log(result)

//apply

function about(hobby,favmusic)
{
    console.log(this.name,this.age,hobby,favmusic)
}

const user1={
    name:'prashant',
    age:23
}

const user2={
    name:'shivam',
    age:23
}

about.apply(user1,['guitar','shivamantra'])
const fun=about.bind(user1,'piano','krishna song')
fun();

const allMethods={
    about:function(){
        return `${this.firstName}${this.lastName} is ${this.age} years old`
    },
    is18:function()
    {
        return this.age>=18;
    }
}
function createUser(firstName,lastName,age,email)
{
    const user=Object.create(allMethods);
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    
   
    return user;
}
const user1=createUser('prashant','sharma',23,'prashant.sharma@appinventiv.com');
const is18=user1.is18();
console.log(is18);
const about=user1.about();
console.log(about);


function hello()
{
    console.log("welcome")
}

hello.prototype.abc="abc";
console.log(hello.prototype)
*/

function sum(...a)
{
    let sum=0;
    console.log(a.length)
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i];
    }
    console.log(sum);
    
}
sum(3,4,5,6,7,8)