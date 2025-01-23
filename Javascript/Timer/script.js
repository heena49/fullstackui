const num1= document.getElementById('num1');
const num2= document.getElementById('num2');
const btn1= document.getElementById('btn1');
const btn2= document.getElementById('btn2');
const btn3= document.getElementById('btn3');
let count1=4
let count2=59
function start(){
    count2--;
    num2.textContent=count2;
    if(count2==0){
        count1--;
        num1.textContent=count1;
    }
    
}
let startFun=setInterval(start,1000);