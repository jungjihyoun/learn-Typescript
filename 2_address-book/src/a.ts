//1 동기적인 함수에서, 타입 추론 가능 

// function fetchItems() : string[]{
//   var items = ['a','b','c'];
//   return items;
// }

// let result = fetchItems();
// console.log(result);


//2   promise의 생성자를 반환하면 , 함수는 프로미스는 추론하지만 그 안의
//    비동기 코드를 알 수 없다

function fetchItems(): Promise<string[]> {
  let items = ['a','b','c'];
  return new Promise(function(resolve){
    resolve(items);
  });
}