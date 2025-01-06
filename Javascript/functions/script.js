// Function

function Function_name(){
    console.log(Function_name)
}
Function_name()

  function name() {
    
  }
  function sub(a,b){
// let a=10,b=20
console.log(a-b)
}
sub(50,20);

// Function have Default Parameters

function add2(a,b=10,c=6){
    console.log(a+b+c)
    }
add2(4,9)

// Function have Multiple Parameters




function add3(...b){
    
    console.log(b)
    let c = [10, 11, ...b,8]
    console.log(c.length)
}
add3(10,11,2,3,4,5,8)


function Function_name(){
    let arr=[2,3,4,5];
    let trr=["usha",...arr]
    console.log(trr)
    console.log(trr.length)

}
Function_name()

function fun1(x){
console.log(x)
}
function fun2(x){
    x(10)

}
fun2(fun1)

// Call back Function

function y1(){
    console.log("hiworld")
}
function y2(x)
{ 
    x()
    console.log("hello")
}
function y3(x)
{
    x(y1)
    console.log("hello2")
}
y3(y2)

//array default elements

