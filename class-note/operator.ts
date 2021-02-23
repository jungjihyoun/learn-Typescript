// Union Type  |
function logMessage(value: string | number){
    //타입가드
    if(typeof value ==='number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');


// 유니온 타입의 특징 : 공통된 특성만 접근할 수 있다
interface Person {
    name: string;
    age: number;
  }
  interface Developer {
    name: string;
    skill: string;
  }
  function introduce(someone: Person | Developer) {
    // someone.name; // O 정상 동작
    // someone.age; // X 타입 오류
    // someone.skill; // X 타입 오류
  }



// 인터섹션 타입&
var min : string | number | boolean;
var capt : string & number & boolean;
function askSomeone(someone: Developer & Person){
    someone.age;
    someone.skill;
    someone.age;
}

// #### 유니온 타입과 인터섹션 타입의 차이 ####
// 실무에서 상대적으로 유니온이 많이 쓰임
// 타입 가드를 거쳐야 하지만 , 타입 선택지가 생기기 때문에 좋다
// 개발자 아니면 일반인 
introduce({name: 'a', skill: 'web'});
// introduce({skill: 'b', age: 3});  -> error

//dev+person 모두 다 써야함
// askSomeone({name:'dd', skill: 'web }) -> age도 들어가야