//Question 1

const print = student =>{
    for(key in student){
        console.log(`${key}:${student[key]}`);
    }
}

let student1 = {
    name : 'Sameer',
    age : 20,
    company : 'Beautiful Code',
};

print(student1)

//Question 2

/* To delete a property from the object we can just use delete keyword*/

delete student1.company

console.log(student1)


//Question 3

/* Objects are pass by reference */

let student2 = student1

student2.name = 'Tarun'

console.log(student1.name);
console.log(student2.name);


//Question 4

/* We can use Object.assign function to copy objects without reference*/

let y = Object.assign({},student1)

y.name = 'Adithya'

console.log(student1)
console.log(y)


//Question 5


const check = (tmp1,tmp2) =>{
    for(let k in tmp1){
        if(k in tmp2){
            if(tmp1[k]!==tmp2[k]){
                return false;
            }
        }
        else{
            return false;
        }
    }
    console.log(tmp1)
    console.log(tmp2)
    return true;
}


let tmp1 = {
    no : 6,
    name : 'lol1',
    educated : false
}

let tmp2 = {
    no : 5,
    name : 'lol1',
    educated : false
}

let ans = check(tmp1,tmp2)

console.log(ans)


//Question 1


class Queue extends Array{
    enqueue(e){
        super.push(e)
    }
    dequeue(){
        return super.shift
    }
    peek(){
        return !this.empty()?this[0]:undefined
    }
    empty(){
        return this.length===0
    }
}

var first = new Queue();
first.enqueue(1)
first.enqueue(2)
first.enqueue(3)
first.enqueue(4)
console.log(first)

let a = first.dequeue()
console.log(a)

let b = first.peek()
console.log(b)

let c = first.empty()
console.log(c)


//Question 2


/* Instance of operator return true if prototype of constructor appears in prototype chain of an object*/

function Person1(name) {
    this.name = name;
  }
  
let p1 = new Person1('John');
  
console.log(p1 instanceof Person1);




