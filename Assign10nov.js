//question 1

function fn1(y) {
    
    for (let i = 2; i * i <= y; i++){
        if(y%i==0)
        {    console.log(y+" "+" Not Prime number");
            return true ;
        }
    }
    console.log(y+" "+"Prime number");
    return y > 1;
}

console.log(fn1(5));



//question 2
function fn(x1, x2) {
    var arr = new Array();
    for (let x = x1; x<= x2; x++){
        arr.push(x);
    }
    return arr;
}

var arr = fn(2, 5);
console.log(arr);