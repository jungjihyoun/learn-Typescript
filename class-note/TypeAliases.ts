//별도의 파일에 타입을 지정하고 import 해오는 방식을 많이 쓴다
// 별칭을 부여하고, 바로 보여준다 . 
// 타입은 확장이 되지 않는다!! 가능한 interface로 선언을 하자


type Human = {
    name: string,
    age: number
}

var seho: Human ={
    name: '세호',
    age: 30
}