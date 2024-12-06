console.log("---------------------------------Question 1---------------------------------");
function q1(arr){
    let arr2 = arr.map((e) => e*2);
    console.log(arr2);
}
q1([2, 4, 5]);

console.log("---------------------------------Question 2---------------------------------");
function q2(arr){
    arr.splice(2, 1)
    console.log(arr)
}
q2([10, 20, 30, 40, 50])

console.log("---------------------------------Question 3---------------------------------");
function q3(arr){
    let arr2 = arr.filter((e) => e.length>5)
    console.log(arr2)
}
q3(['abcd', 'fwted', 'xcfvgjnh0', "696969"])

console.log("---------------------------------Question 4---------------------------------");
function q4(arr){
    console.log(arr.includes(10));
}
q4([1, 5, 10, 15])

console.log("---------------------------------Question 5---------------------------------");
function q5(nums){
    console.log(nums.findIndex((e) => e>18))
}
q5([5, 10, 15, 20, 25])

console.log("---------------------------------Question 6---------------------------------");
function q6(fruits){
    fruits.unshift('berry', 'bluebrerry', 'strawberry');
    console.log(fruits)
}
q6(['apple', 'banana'])

console.log("---------------------------------Question 7---------------------------------");
function q7(arr){
    if(arr.every((e) => e%2==0) == true){
        console.log("all are even")
    }else{
        console.log("not all are even")
    }
}
q7([2, 4, 6, 8])

console.log("---------------------------------Question 8---------------------------------");
function q8(arr){
    if(arr.some((e)=> e%2==0) == true){
        console.log("some are divisible by 2")
    }else{
        console.log("None are divisible by 2")
    }
}
q8([3, 5, 7, 8])

console.log("---------------------------------Question 9---------------------------------");
function q9(colors){
    colors.splice(1, 2, 'purple', 'orange')
    console.log(colors);
}
q9(['red', 'blue', 'green', 'yellow'])

console.log("---------------------------------Question 10---------------------------------");
function q10(arr){
    let occ=0
    arr.forEach((e) =>{
        if(e==7)
            occ += 1
    })
    console.log(occ + " times 7 has occur")
}
q10([7, 1, 7, 2, 7, 3])

console.log("---------------------------------Question 11---------------------------------");
function q11(arr){
    console.log(((arr.split('')).reverse()).join(''))
}
q11("Javascript")

console.log("---------------------------------Question 12---------------------------------");
function q12(arr){
    console.log(arr.trim())
}
q12(" Hello World! ")

console.log("---------------------------------Question 13---------------------------------");
let q13 = (words) => {
    console.log(words.join(' '))
}
q13(["javascript", "is", "awesome"])

console.log("---------------------------------Question 14---------------------------------");
function q14(arr){
    console.log(arr.split(','))
}
q14("apple,banana,grape")

console.log("---------------------------------Question 15---------------------------------");
function q15(str){
    console.log(str.indexOf('a'))
}
q15("Javascript")