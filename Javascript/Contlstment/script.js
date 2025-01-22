// print all the values of an array except 3rd value
// eg:[6,4,5,7,8]

// let arr =[6,4,5,7,8]
// arr.forEach((s) =>
// {
//     if(arr.indexOf(s) != 2)
//     {
        // console.log(s)
    // }
// })

//  print only number greater than 5 in given array

let arr =[2,6,4,5,7,8]
arr.forEach((h) => {
    if (h >=5)
    {
        console.log(h)
    }
})

//check whether someone is eligible to vote or not based on his age

let age = 22;
if (age >=18)
{
    console.log("eligible to vote")
}
else{
    console.log("not eligible to vote")
}

//check whether given number is even or odd

let num= 10;
if (num % 2==0)
{
    console.log("even")
}
else{
    console.log("odd")
}

// check whether password is having atleast 8 characters or not

// let pwd='123rgb45';
let pwd='12345678';
if (pwd >= 8)
{
 console.log(" strong password")
}
else
{
    console.log("Not Valid password")
}

// print welcome note based on user role
 let userrole= 'admin'
 if(userrole == 'admin')
 {
    console.log("welcome to admin")
 }
 else if(userrole == 'faculty')
 {
    console.log("welcome to faculty")
 }
 else
 {
    console.log("Hi,Student")
 }

 let number=10
 if (num > 0){
	console.log('number is positive')
 }
 else if(number < 0){
	console.log('number is negative')
}
else {
	console.log("negative or positive")
}
 // wap to print day of the week based on number of the week

 let v = 2;
switch (v) {
	case 1:
		console.log("Monday")
		break
	case 2:
		console.log("Tuesday")
		break
	case 3:
		console.log("Wednesday")
		break
	case 4:
		console.log("Thursday")
		break
	case 5:
		console.log("Friday")
		break
	case 6:
		console.log("saturday")
		break
	case 7:
		console.log("Sunday")
        break
    default:console.log("choose between 1-7")
}