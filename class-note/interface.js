//변수에 인터페이스를 활용 :
var seho = {
    age: 33,
    name: '세호'
};
var jihyoun = {
    age: 24,
    // name: '지현',
    birth: 'dd'
};
// 함수에 인터페이스 활용
function getUser(user) {
    console.log(user);
}
var sum;
sum = function (a, b) {
    return a + b;
};
var arr = ['a', 'b', 'c'];
var obj = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
};
Object.keys(obj).forEach(function (value) {
    console.log(value);
});
