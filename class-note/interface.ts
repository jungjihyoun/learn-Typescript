interface User{
    age: number;
    name: string;
}

//변수에 인터페이스를 활용 :
var seho: User = {
    age: 33,
    name: '세호'
};

var jihyoun =  {
    age: 24,
    // name: '지현',
    birth: 'dd'
}

// 함수에 인터페이스 활용
function getUser(user: User){
    console.log(user);
}
getUser(seho);


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFuction{
    (a:number, b: number) : number;
}

var sum: SumFuction;
sum = function(a:number, b:number): number{
    return a+b;
}


//인덱싱
interface StringArray {
    [index: number]: string;
}
var arr: StringArray = ['a','b','c'];
// arr[0] = 10; error!



//딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp;
}
var obj : StringRegexDictionary= {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(function(value){
    
});


//인터페이스 확장(상속이용)
// interface Person {
//     name: string;
//     age: number;
// }
// interface Developer extends Person {
//     language: string;
// }

// var capt: Developer = {
//     language: 'ts',
//     name: "dd",
//     age: 3
// }



