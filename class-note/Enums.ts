//Enums

// 1. 숫자형 이넘 (특별한 지정 없으면 0 부터)
enum Shoes{
    Nike,
    Adidas,
}
var myShoes  = Shoes.Nike;
console.log(myShoes); // 0


// 2. 문자형 이넘
enum color{
    Yello = "yellow",
    Pink = "pink"
}

var Color = color.Pink;
console.log(Color);


// 3. 이넘 활용 사례
// 목록이 필요한 경우 이넘을 사용하면 
// 예외처리가 쉽다 
enum Answer{
    Yes =  'Y',
    No = 'N'
}

function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다');
    }
    if( answer === Answer.No ){
        console.log('오답입니다');
    }
}

askQuestion(Answer.Yes);
// askQuestion('Yes');   -> error