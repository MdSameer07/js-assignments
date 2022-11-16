//Question 1

/* Arrays are passed by reference to a function because when an updations are made 
   to an array inside the function then the original array gets updated.*/


const tmp = arr => arr[0] = 5

arr = [1,2,3,4]
tmp(arr)
console.log(arr)


//Question 2

/* We can clone an array just by using a spread operator , but this only works fine for single dimensional 
arrays as it is passed by value but in case of multi-dimensional arrays it is passed bt reference.*/

/* Another way is to use array.map() function.*/

arr = [1,2,3]
new_arr = arr.map(ele=>ele)
console.log(new_arr)


//Question 3

/* shift - it removes and returns first element from the array and all other elements are moved on step left.*/

lol = [1,2,3,4]
lol.shift()
console.log(lol)

/* unshift - adds one element to the beginning of the array and returns length of new array.*/

lol1 = [1,2,3,4]
lol.unshift(0)
console.log(lol1)

/* slice - return copy of all/part of the array without modifying the original array*/

lol2 = [1,2,3,4,5]
haha = lol2.slice(1,3)
console.log(haha)


/* splice - modifies array in place by insering,removing elements then returning array of removed elements*/

lol3 = [1,2,3,4,5]
lol3.splice(1,4,100)
console.log(lol3)

/*pop() - removes element from the end of the array*/

lol4 = [1,2,3,4]
lol4.pop()
console.log(lol4)


//Question 1

for(let i=5;i>=1;i--){
    console.log(i)
}

//Question 2

/* for-of is majorly used in arrays, it can print the array elements*/

const names = ['Sameer','Shreekar','Tarun','Adithya']
for(const i of names){
    console.log(i)
}

/* for-in is majorly used for objects , it prints out key values in objects*/

const symbols = {
    fb:'Facebook',
    yt:'Youtube',
    ig:'Instagram'
}
for(const i in symbols){
    console.log(i)
}


//Question 1

const nums = [2,4,6,8,10]
const squares = nums.map(num=>num*num)
console.log(squares)

//Question 2

const mix = [1,'two',3,'four',5,'six',7,'eight',9,'ten']
const strings = mix.filter(i=>{
    return typeof i === 'string'
})
console.log(strings)

//Question 3

/* The arguments of the reduce function are accumulator,currentvalue,index array , 
   function description and initialvalue*/

const bro = [1,3,5,7,9]
final = bro.reduce((accumulator,currvalue)=>{
    return accumulator+currvalue;
})

console.log(final)

