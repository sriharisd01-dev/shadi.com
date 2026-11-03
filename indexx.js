let a=10
let b="10"
console.log(a==b);

console.log(a===b);

let age=17;

if(age>=18) {
    console.log("eligible Vote");
    
}
else{
    console.log("not eligible");
}

for(let i=0;i<10;i++){
    if(i%2==0){
        console.log(i);
 
    }
}
for(let i=0;i<10;i++){
    if(i%2!=0){
        console.log(i);
 
    }
}
for(let i=0;i<10;i++){
    if(i==0){
        console.log(i); 
    }
}
for(let i=0;i<10;i++){
    if(i**2==4){
        console.log(i); 
    }
}
for(let i=0;i<10;i++){
    if(i**2==9){
        console.log(i); 
    }
}
let sumFor = 0;
for (let i = 1; i <= 100; i++) {
    sumFor += i;
}
console.log("Sum (For):", sumFor);

for (let i = 2; i <= 20; i += 2) {
    console.log("Even (For):", i);
}

const numbers = [2, 4, 6, 8];
for (let i = 0; i < numbers.length; i++) {
    console.log("Array item * 2 (For):", numbers[i] * 2);
}

const num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

let str = "hello";
let reversedFor = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedFor += str[i];
}
console.log("Reversed (For):", reversedFor);


function by(){
    console.log("By");
}
function hello(){
   return "Bye";
}

let msg= hello()
by()
console.log(msg);
