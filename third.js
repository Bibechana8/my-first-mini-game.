// let heroes =['Superman','Batman','Wonder Woman','Flash','Aquaman'];
// //for loop
// for (let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// //for of loop
// for (let hero of heroes){
//     console.log(hero);
// }
//practice qno.1
let marks = [85, 92, 78, 90, 88];
let sum = 0;
for (let mark of marks){
    sum += mark;
}
let average = sum / marks.length;
console.log(`Average marks of the class=${average} `);

//practice qno.2
// let items = [250,650,300,900,50];
// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} is ${val}`);
//     let offer =val/10;
//     items[i] = val - offer;
//     console.log(`value after offer =${items[i]}`);
//     i++;
    
// }
let items = [250,650,300,900,50];
for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] = items[i] - offer;
}
console.log(items);
