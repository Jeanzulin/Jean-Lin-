let a = 1;
function getA(){
    a++;
    console.log(a);
    return a;
}

console.log("hello");
module.exports = getA;