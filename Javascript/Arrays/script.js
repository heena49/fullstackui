// let arr=[2,4,6,7,5]
// console.log(arr[0])

// console.log(typeof [arr])
// console.log(arr.length)
// arr=[3,5,7,9,2,5]
// console.log(arr.indexOf(5))
// console.log(arr.lastIndexOf(5))

// y = arr.concat(5,4,7)
// console.log(y)

// arr=[2,5,3]
// arr.push(9)
// console.log(arr)
// arr.pop(9)
// console.log(arr)
// arr.unshift(5)
// console.log(arr)
// arr.shift(5)
// console.log(arr)
// arr=[7,8,9,5]  
// arr.splice(2,3)
// console.log(arr)

// arr = [1, 2, 4, 6]
// arr.forEach(function(ele,ind)
// {
//    console.log(ele,ind) 
// })
friends = ["penny", "chandler", "ross", "rachel", "monica", "sheldon"]
/* print first letters of all values in above array */
friends.forEach(function(ele)
{
console.log(ele[0])
})
let x = friends.forEach(function (ele)
{
    return ele.length
})
console.log(x) // undefined -- forEach cannot return any value

// print lenght of values and return in above array
let x1 = friends.map(function (ele) {
	return ele.length
})
console.log(x1) //[5,8,4,6,6,7]
// map will return for every element of the array


arr = [5,4,3, 2, 1]
let z = arr.map((ele) => ele % 2 == 0)
console.log(z)

// writa a programm which gives true result in above array 
let z1 = arr.filter((ele) => ele % 2 == 0)
console.log(z1)

let z2 = arr.some((ele) => ele > 3)
console.log(z2)

let z3 = arr.every((ele) => ele>3)
console.log(z3)

let z4 = arr.find((ele) => ele % 2 == 0)
console.log(z4)

/* reduce */
arr = [-5,-3,-1,-2,-6,-7]
let res = arr.reduce((prev,ele) =>
{
    return prev+ele
},0)
let max = arr.reduce((prev,ele) =>
{
    return Math.max(prev,ele)
},-Infinity)
// arr = [[1, 2], [3, 4], [5, 6]];
// let z6 = arr.reduce(function(prev,ele)
// {
//    return prev.push(...ele)
// },[])

friends = ["penny", "chandler", "ross", "rachel", "monica", "sheldon"]
let x5= friends.sort() // bubble sort
console.log(x5)
arr= [5,4,11,1,44]
console.log(arr.sort())

arr = [5, 4, 11, 1, 44]
console.log(arr.reverse())
