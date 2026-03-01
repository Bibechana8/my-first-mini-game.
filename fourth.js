// function
// function countVowels(str) {
//     let count = 0;
//     for(const char of str){
//         if(
//             char==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++;
//         }
//     }
//     return count;
//     }

// const countVow =(str)=>{
//     let count = 0;
//     for(const char of str){
//         if(
//             char==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"
//         ){
//             count++;
//         }
//     }
//     return count;
//     }

// function abc(){
//     console.log("Hello");
// }
// function myfunc(abc){
//     return abc;
// }

let n = prompt("Enter a number:");

let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("sum=", sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("factorial=", factorial);

