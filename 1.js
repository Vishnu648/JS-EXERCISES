let array = ['apple','banana','mango']
array.forEach((fruit) => {
  console.log(fruit);
}
)
console.log();

let objectArray = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]
objectArray.map((fruit) => {
  console.log(fruit.fruit);
}
)
console.log();


let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}
for(i in object){
    console.log(object[i]);
}